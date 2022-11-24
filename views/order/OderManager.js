import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./styles/OderManager_Styles";
import { AntDesign } from "@expo/vector-icons";
import data from "./data/OrderManager_Data";
function OderManager({ navigation }) {
  let datas = [
    {
      data: [
        {
          id: "1",
          img: require("../../images/bgk.png"),
          descrip: "Starbucks",
          name: "Capuchino",
          price: 22.22,
          total: 1,
        },
        {
          id: "2",
          img: require("../../images/coffe2.webp"),
          descrip: "Lavazza",
          name: "Trung Nguyen",
          price: 22.22,
          total: 2,
        },
      ],
    },
    {
      data: [
        {
          id: "1",
          img: require("../../images/bgk.png"),
          descrip: "Starbucks",
          name: "Capuchino",
          price: 22.22,
          total: 2,
        },
        {
          id: "2",
          img: require("../../images/coffe2.webp"),
          descrip: "Lavazza",
          name: "Trung Nguyen",
          price: 22.22,
          total: 1,
        },
      ],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            style={styles.buttonLeft}
            onPress={() => navigation.navigate("Home")}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerHeader_Text}>
          <Text style={styles.containerHeader_Title}>Oder Manager</Text>
        </View>
      </View>
      <View style={styles.containerBody}>
        <View style={{ paddingVertical: 10 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OderView2", {
                listData: datas[0].data,
                subTotal: 116.66,
              });
            }}
            style={{
              height: 110,
              width: "90%",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 15,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={require("../../images/note.png")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Oder 1
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.7 }}>
                Total amount: 3
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.7 }}>
                Free & Delivery: 50.000 đ
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.7 }}>
                Total price: 116,66 đ
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  opacity: 0.5,
                  alignSelf: "flex-end",
                }}
              >
                24/11/2022
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OderView2", {
                listData: datas[1].data,
                subTotal: 116.66,
              });
            }}
            style={{
              height: 110,
              width: "90%",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 15,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={require("../../images/note.png")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Oder 2
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.7 }}>
                Total amount: 3
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.7 }}>
                Free & Delivery: 50.000 đ
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.7 }}>
                Total price: 116,66 đ
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  opacity: 0.5,
                  alignSelf: "flex-end",
                }}
              >
                24/11/2022
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OderManager;
