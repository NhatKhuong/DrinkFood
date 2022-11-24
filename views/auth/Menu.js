import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Menu(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="black" />

      <View style={styles.box}>
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
        <View style={{ width: "60%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
              marginRight: 30,
            }}
          >
            <FontAwesome name="user-circle-o" size={20} color="white" />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
            }}
            onPress={() => props.navigation.navigate("OderView")}
          >
            <FontAwesome5 name="shopping-cart" size={20} color="white" />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              My Orders
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <AntDesign name="hearto" size={20} color="white" />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              Favorite
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Entypo name="shopping-bag" size={20} color="white" />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              Delivery
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons name="settings-outline" size={20} color="white" />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Entypo name="log-out" size={20} color="white" />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingLeft: 15,
  },
  header: {
    flex: 0.05,
    backgroundColor: "white",
  },

  box: {
    flex: 5.6,
    backgroundColor: "black",
  },
  footer: {
    flex: 0.3,
    backgroundColor: "black",
  },
});
