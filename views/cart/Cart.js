import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles/Cart_Styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CartItem from "./CartItem";
import { NativeBaseProvider, FlatList } from "native-base";
import { getAllOrder } from "../../asysn_storage/order_storage";
export default function Cart({ props, route, navigation }) {
  const [subTotal, setSubTotal] = useState(0);
  const [listData, setListData] = useState([]);

  const [isLoad, setIsLoad] = useState(false);
  const freeDelivery = 50;

  useEffect(() => {
    renderOrder();
  }, [route.params]);

  const renderOrder = async () => {
    await getAllOrder();
    let list = await getAllOrder();
    setListData(list);
    let sub = 0;
    list.forEach((data) => {
      sub += subTotal + data.total * data.price;
    });
    setIsLoad(true);
    setSubTotal(sub);
  };

  const plushTotal = (price, id, amount) => {
    const index = listData.findIndex((obj) => {
      return obj.id === id;
    });
    setSubTotal(subTotal + price);
    listData[index].total = amount;
  };

  const minusTotal = (price, id, amount) => {
    const index = listData.findIndex((obj) => {
      return obj.id === id;
    });
    setSubTotal(subTotal - price);
    if (amount != 0) listData[index].total = amount;
    else {
      // setListData([...listData.slice(0, index), ...listData.slice(index + 1)]);
      setListData(listData.filter((item) => item.id !== id));
    }
  };

  return isLoad ? (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#ffff"} barStyle={"dark-content"} />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.touchableOpacityBack}
            onPress={() => {
              setListData([]);
              setSubTotal(0);
              navigation.navigate("Home");
            }}
          >
            <Ionicons name="arrow-back-sharp" size={22} color="black" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>My cart</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={listData}
            renderItem={({ item }) => {
              return (
                <CartItem
                  {...item}
                  onPressPlush={plushTotal}
                  onPressMinus={minusTotal}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerInfoTotal}>
            <View style={styles.footerLine}>
              <Text style={styles.textFooter}>Subtotal:</Text>
              <Text style={styles.textFooter}>
                <MaterialCommunityIcons
                  name="currency-bdt"
                  size={20}
                  color="rgba(0,0,0,0.4)"
                />
                {subTotal}
              </Text>
            </View>
            <View style={styles.footerLine}>
              <Text style={styles.textFooter}>Free & Delivery:</Text>
              <Text style={styles.textFooter}>
                <MaterialCommunityIcons
                  name="currency-bdt"
                  size={20}
                  color="rgba(0,0,0,0.4)"
                />
                {freeDelivery}
              </Text>
            </View>
            <View style={styles.footerLine}>
              <Text style={styles.textFooter}>Total:</Text>
              <Text style={styles.textFooter}>
                <MaterialCommunityIcons
                  name="currency-bdt"
                  size={20}
                  color="rgba(0,0,0,0.4)"
                />
                {freeDelivery + subTotal}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonCheckout}
            onPress={() => {
              navigation.navigate("OderView", {
                listData: listData,
                subTotal: subTotal,
                freeDelivery: freeDelivery,
                total: freeDelivery + subTotal,
              });
            }}
          >
            <Text style={styles.textCheckout}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  ) : null;
}
