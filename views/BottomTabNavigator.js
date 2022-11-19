import { Image, TouchableOpacity, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import Home from "./Home";
import Cart from "./cart/Cart";
import { Ionicons } from "@expo/vector-icons";
import OderView from "./order/OderView";
const Tab = createBottomTabNavigator();

// const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
//   var isSelected = accessibilityState.selected;
//   if (isSelected) {
//     return (
//       <View style={{ flex: 1, alignItems: "center" }}>
//         <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
//           <View style={{ flex: 1, backgroundColor: "#fff" }}></View>
//           <Svg width={70} height={61} viewBox="0 0 75 61">
//             <Svg width={71} height={58} viewBox="0 0 75 61">
//               <Path
//                 d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
//                 // fill="#fff"
//               />
//             </Svg>
//           </Svg>
//           <View style={{ flex: 1, backgroundColor: "#fff" }}></View>
//         </View>

//         <TouchableOpacity
//           style={{
//             top: -23,
//             justifyContent: "center",
//             alignItems: "center",
//             width: 50,
//             height: 50,
//             borderRadius: 25,
//             backgroundColor: "#fff",
//           }}
//           onPress={onPress}
//         >
//           {children}
//         </TouchableOpacity>
//       </View>
//     );
//   } else {
//     return (
//       <TouchableOpacity
//         style={{
//           flex: 1,
//           height: 60,
//           backgroundColor: "#fff",
//         }}
//         activeOpacity={1}
//         onPress={onPress}
//       >
//         {children}
//       </TouchableOpacity>
//     );
//   }
// };

function BottomTabNavigator({ navigation }) {
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
        name="OderView"
        component={OderView}
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
      />
    </Tab.Navigator>
    // <View>
    //   <Text>fdsf</Text>
    // </View>
  );
}
export default BottomTabNavigator;
