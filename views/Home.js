import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  Modal,
  TouchableNativeFeedback,
} from "react-native";
import React, { Component, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import { saveObjectOrder } from "../asysn_storage/order_storage";
import Menu from "./auth/Menu";

export default function Home({ navigation }) {
  const [items, setItems] = useState([
    {
      id: "1",
      img: require("../images/bgk.png"),
      descrip: "with chocolate",
      name: "Capuchino",
      price: 22.22,
    },
    {
      id: "2",
      img: require("../images/coffe2.webp"),
      descrip: "with chocolate",
      name: "Trung Nguyen",
      price: 22.22,
    },
    {
      id: "3",
      img: require("../images/coffe1.jpg"),
      descrip: "with chocolate",
      name: "Capuchino",
      price: 22.22,
    },
    {
      id: "4",
      img: require("../images/coffe2.jpg"),
      descrip: "with chocolate",
      name: "Trung Nguyen",
      price: 22.22,
    },
    {
      id: "5",
      img: require("../images/coffe3.jpg"),
      descrip: "with chocolate",
      name: "StarBuck",
      price: 22.22,
    },
    {
      id: "6",
      img: require("../images/coffe3.jpg"),
      descrip: "with chocolate",
      name: "Capuchino",
      price: 22.22,
    },
  ]);

  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const amin = useRef(new Animated.Value(0)).current;
  const rotation = amin.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-20deg", "20deg"],
  });

  const handleCloseModal = () => {
    setVisible(false);
  };

  const hanldMove = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(amin, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
          delay: 1000,
        }),
        Animated.timing(amin, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(amin, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(amin, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(amin, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(amin, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(amin, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 10,
      }
    ).start();
  };
  hanldMove();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 55,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 5, borderColor: "#fff" }}
          onPress={() => {
            setVisible(true);
          }}
        >
          <Ionicons name="menu-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={hanldMove}>
          <Animated.View
            style={{
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              transform: [{ rotate: rotation }],
            }}
          >
            <AntDesign name="bells" size={28} color="#fff" />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 25,
            width: 200,
            color: "#2cc167",
            fontWeight: "bold",
          }}
        >
          Fast and Delicious Food
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          borderRadius: 10,
          paddingRight: 10,
        }}
      >
        <TextInput
          value={text}
          onChangeText={(value) => {
            setText(value);

            let data = items;
            data.filter((element) => {
              return !element.name.includes(value);
            });

            console.log(data);
          }}
          style={{
            borderWidth: 1,
            flex: 1,
            height: 40,
            borderColor: "#fff",
            backgroundColor: "#fff",
            borderRadius: 10,
            fontSize: 16,
            paddingLeft: 20,
          }}
        ></TextInput>
        <EvilIcons name="search" size={24} color="#000" />
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        <View
          style={{
            marginRight: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="location-pin" size={24} color="#fff" />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ccc" }}>
            Adress
          </Text>
          <Text style={{ color: "#2cc167", fontSize: 16, fontWeight: "bold" }}>
            12 - Nguyen Van Bao - HCM
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
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
            All
          </Text>
        </TouchableOpacity>
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
            Fast Food
          </Text>
        </TouchableOpacity>
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
            Drink
          </Text>
        </TouchableOpacity>
      </View>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={{ marginTop: 10, backgroundColor: "#000", height: 400 }}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", {
                item: item,
              })
            }
          >
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 10,
                resizeMode: "stretch",
              }}
              source={item.img}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ color: "#c67c4e", fontSize: 14 }}>
              {item.descrip}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: 150,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#c67c4e", fontSize: 16, fontWeight: "bold" }}
              >
                ${item.price}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  saveObjectOrder({ ...item, total: 1 });
                }}
              >
                <Image
                  style={{ width: 20, height: 20, borderRadius: 5 }}
                  source={require("../images/btnadd.png")}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal transparent={true} visible={visible} animationType={"none"}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.2)",
            width: 180,
          }}
        >
          <Menu onPress={handleCloseModal} navigation={navigation} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
