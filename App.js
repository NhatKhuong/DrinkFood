import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./views/cart/Cart";
import OderManager from "./views/order/OderManager";
import OderStatus from "./views/order/OderStatus";
import OderView from "./views/order/OderView";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Cart"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OderStatus" component={OderStatus} />
        <Stack.Screen name="OderManager" component={OderManager} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="OderView" component={OderView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
