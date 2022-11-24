import { Image, TouchableOpacity, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import Home from "./Home";
import Cart from "./cart/Cart";
import { Ionicons } from "@expo/vector-icons";
import OderView from "./order/OderView";
import { getAllOrder } from "../asysn_storage/order_storage";
import OderView2 from "./order/OderView2";
import OderManager from "./order/OderManager";
const Tab = createBottomTabNavigator();

function BottomTabNavigator({ navigation }) {
  let datas = [
    {
      data: [
        {
          id: "1",
          img: require("../images/bgk.png"),
          descrip: "Starbucks",
          name: "Capuchino",
          price: 22.22,
          total: 1,
        },
        {
          id: "2",
          img: require("../images/coffe2.webp"),
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
          img: require("../images/bgk.png"),
          descrip: "Starbucks",
          name: "Capuchino",
          price: 22.22,
          total: 2,
        },
        {
          id: "2",
          img: require("../images/coffe2.webp"),
          descrip: "Lavazza",
          name: "Trung Nguyen",
          price: 22.22,
          total: 1,
        },
      ],
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          height: "7%",
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: "#f6f6f6",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="md-home"
              size={24}
              color={focused ? "#329db6" : "rgba(0,0,0,0.5)"}
            />
          ),
          // tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="md-cart"
              size={25}
              color={focused ? "#329db6" : "rgba(0,0,0,0.5)"}
            />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            navigation.jumpTo("Cart", { isLoad: true });
          },
        })}
      />
      <Tab.Screen
        name="OderManager"
        component={OderManager}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/image/iconBill.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: focused ? "#f778a7" : "rgba(0,0,0,0.5)",
                tintColor: focused ? "#329db6" : "rgba(0,0,0,0.5)",
              }}
            />
          ),
        }}
        // listeners={({ navigation, route }) => ({
        //   tabPress: async (e) => {
        //     navigation.jumpTo("OderView2", {
        //       listData: datas[0].data,
        //       subTotal: 116.66,
        //     });
        //   },
        // })}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
