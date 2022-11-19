import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  decreaseOrder,
  getAllOrder,
  increaseOrder,
  saveObjectOrder,
} from "../../asysn_storage/order_storage";

export default function Detail({ navigation }) {
  const route = useRoute();
  const [amount, setAmount] = useState(1);
  const [item, setItem] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (route.params != null) {
      setItem(route.params.item);
      setIsLoad(true);
    }
  });
  return isLoad ? (
    <View
      style={{
        paddingLeft: 15,
        backgroundColor: "#000",
        paddingRight: 15,
        flex: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 0.1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Detail
        </Text>
        <View>
          <Ionicons name="heart-sharp" size={24} color="#fff" />
        </View>
      </View>
      <View style={{ flex: 0.6 }}>
        <View>
          <Image
            style={{ height: 350, width: "100%", resizeMode: "stretch" }}
            source={item.img}
          ></Image>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              disabled={amount === 1 ? true : false}
              onPress={() => {
                setAmount(amount - 1);
                // decreaseOrder(id);
              }}
              style={{
                borderWidth: 2,
                borderColor: "#2cc167",
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Ionicons name="ios-remove-sharp" size={24} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                fontSize: 24,
                marginLeft: 10,
                marginRight: 10,
                fontWeight: "bold",
              }}
            >
              {amount}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setAmount(amount + 1);
                // increaseOrder(id);
              }}
              style={{
                borderWidth: 2,
                borderColor: "#2cc167",
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Ionicons name="md-add-sharp" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#2cc167",
              width: 80,
              height: 35,
              borderRadius: 5,
              borderColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              <Ionicons name="star" size={16} color="yellow" />
              4.9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              width: 80,
              height: 35,
              borderRadius: 5,
              borderColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              <Feather name="clock" size={24} color="#fff" /> 5 phút
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              width: 100,
              height: 35,
              borderRadius: 5,
              borderColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              <FontAwesome name="dollar" size={24} color="#2cc167" /> Free ship
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 140, flex: 0.2 }}>
        <Text style={{ fontSize: 16, color: "#fff" }}>{item.name}</Text>
        <Text style={{ color: "#fff" }}>
          Cafe Trung Nguyên Sáng tạo 8 được chọn lọc từ những hạt cà phê ngon
          nhất của Việt Nam.Là sản phẩm siêu sạch và tuyệt ngon cho những ai là
          tín đồ của cà phê. Cafe Trung Nguyên Sáng tạo 8 được chọn lọc từ những
          hạt cà phê ngon nhất của Việt Nam.Là sản phẩm siêu sạch và tuyệt ngon
          cho những ai là tín đồ của cà phê.
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 0.1,
        }}
      >
        <View>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Total Price
          </Text>
          <Text style={{ color: "#2cc167", fontSize: 18, fontWeight: "bold" }}>
            100,000 VND
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={async () => {
              saveObjectOrder({ ...item, total: amount });
              navigation.navigate("Cart", { data: 1 });
            }}
            style={{
              backgroundColor: "#2cc167",
              width: 240,
              height: 45,
              borderRadius: 20,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              <Ionicons name="ios-cart-outline" size={24} color="#fff" /> Thêm
              vào giỏ hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : null;
}
