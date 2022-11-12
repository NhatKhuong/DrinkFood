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
import data from "./data/CartData";
export default function Cart(props) {
  const [subTotal, setSubTotal] = useState(0);
  const freeDelivery = 50;
  let listData = [];
  let total = 0;

  data.map((item) => {
    total += item.priceItem;
    listData.push({
      id: item.id,
      amount: 1,
      descriptions: item.descriptions,
      productName: item.productName,
      price: item.priceItem,
    });
  });

  useEffect(() => {
    setSubTotal(total);
  }, []);

  const plushTotal = (price, index, amount) => {
    setSubTotal(subTotal + price);
    listData[index].amount = amount;
  };

  const minusTotal = (price, index, amount) => {
    setSubTotal(subTotal - price);
    listData[index].amount = amount;
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#ffff"} barStyle={"dark-content"} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.touchableOpacityBack}>
            <Ionicons name="arrow-back-sharp" size={22} color="black" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>My cart</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
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
              props.navigation.navigate("OderView", {
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
  );
}
