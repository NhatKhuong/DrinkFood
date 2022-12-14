import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import styles from "./styles/OderView_Styles";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Image } from "react-native";
export default function OderView(props) {
  let [listData, setListData] = useState([]);
  let [subTotal, setSubTotal] = useState(0);
  let [subDiscount, setSubDiscount] = useState(0);
  let [subDiscount2, setSubDiscount2] = useState(0);
  let [freeDelivery, setFreeDelivery] = useState(50);
  const route = useRoute();
  useEffect(() => {
    setSubTotal(0)
    setFreeDelivery(50)
    if (route.params != null) {
      setListData(route.params.listData);
      setSubTotal(route.params.subTotal);
      setSubTotal(route.params.subTotal);

      if(route.params.change){
        console.log("change");

        if (route.params.discount !== 0) {
          setSubDiscount(route.params.discount)
          console.log(route.params.discount2);
          setFreeDelivery(0)
        }
  
        if (route.params.discount2 !== 0) {
          console.log(route.params.discount2);
          console.log(subTotal);
          setSubTotal(
            subTotal-route.params.discount2
          );
        }
      }

    }
  }, [route.params]);

  const navigation = useNavigation();
  const hanldPress = () => {
    navigation.navigate("OderStatus");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ffff"} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.touchableOpacityBack}
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Your Order</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={listData}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingBottom: 10 }}>
                <View style={styles.itemOrder}>
                  <Text style={styles.amount}>{item.total}</Text>

                  <Image style={styles.imageItem} source={item.img} />
                  <View style={styles.infoItem}>
                    <Text style={styles.nameProduct}>{item.name}</Text>
                    <Text style={styles.descriptions}>{item.descrip}</Text>
                  </View>
                  <Text style={styles.textPrice}>
                    {(item.total * item.price).toFixed(2)} ??
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerInfoTotal}>
          <View style={styles.footerLine}>
            <Text style={styles.textFooter}>Subtotal:</Text>
            <Text style={styles.textFooter}>{subTotal.toFixed(2)} ??</Text>
          </View>
          <View style={styles.footerLine}>
            <Text style={styles.textFooter}>Free & Delivery:</Text>
            <Text style={styles.textFooter}>{freeDelivery.toFixed(2)} ??</Text>
          </View>
          <View style={styles.footerLine}>
            <Text style={[styles.textFooter, { fontWeight: "bold" }]}>
              Total:
            </Text>
            <Text style={[styles.textFooter, { fontWeight: "bold" }]}>
              {(freeDelivery + subTotal).toFixed(2)} ??
            </Text>
          </View>
          <TouchableOpacity style={styles.details}>
            <Text style={styles.textDetail}>Add more items</Text>
            <Ionicons name="chevron-forward" size={24} color="#3db072" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.details}
            onPress={() => props.navigation.navigate("Voucher")}
          >
            <Text style={styles.textDetail}>Promo code</Text>
            <Ionicons name="chevron-forward" size={24} color="#3db072" />
          </TouchableOpacity>
          <TouchableOpacity onPress={hanldPress} style={styles.buttonContinue}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
