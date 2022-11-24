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
export default function OderView2(props) {
  let [listData, setListData] = useState([]);
  let [subTotal, setSubTotal] = useState(0);
  let [isLoad, setIsLoad] = useState(false);
  let [freeDelivery, setFreeDelivery] = useState(50);
  const route = useRoute();
  useEffect(() => {
    if (route.params != null) {
      setListData(route.params.listData);
      setSubTotal(route.params.subTotal);
      setIsLoad(true);
    }
  }, [route.params]);

  const navigation = useNavigation();
  const hanldPress = () => {
    navigation.navigate("OderStatus");
  };
  return isLoad ? (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ffff"} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.touchableOpacityBack}
          onPress={() => {
            props.navigation.navigate("OderManager");
          }}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Order Detail</Text>
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
                    {(item.total * item.price).toFixed(2)} đ
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
            <Text style={styles.textFooter}>{subTotal.toFixed(2)} đ</Text>
          </View>
          <View style={styles.footerLine}>
            <Text style={styles.textFooter}>Free & Delivery:</Text>
            <Text style={styles.textFooter}>{freeDelivery.toFixed(2)} đ</Text>
          </View>
          <View style={styles.footerLine}>
            <Text style={[styles.textFooter, { fontWeight: "bold" }]}>
              Total:
            </Text>
            <Text style={[styles.textFooter, { fontWeight: "bold" }]}>
              {(freeDelivery + subTotal).toFixed(2)} đ
            </Text>
          </View>
          <TouchableOpacity style={styles.details} disabled>
            <Text style={styles.textDetail}>Add more items</Text>
            <Ionicons name="chevron-forward" size={24} color="#3db072" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.details}
            disabled
            onPress={() => props.navigation.navigate("Voucher")}
          >
            <Text style={styles.textDetail}>Promo code</Text>
            <Ionicons name="chevron-forward" size={24} color="#3db072" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={hanldPress}
            disabled
            style={styles.buttonContinue}
          >
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ) : null;
}
