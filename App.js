import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import OderManager from './views/order/OderManager';
import OderStatus from './views/order/OderStatus';
import Detail from './views/product/Detail';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Cart from "./views/cart/Cart";
import OderView from "./views/order/OderView";
import Start from './views/auth/Start';
import Voucher from './views/Voucher';
import Test from './views/Test';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'Voucher'} screenOptions={{headerShown:false}}>
          <Stack.Screen name='Voucher' component={Voucher}/>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Test' component={Test}/>
              <Stack.Screen name='Register' component={Register}/>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Detail' component={Detail}/>
              <Stack.Screen name='Cart' component={Cart}/>
              <Stack.Screen name='OderView' component={OderView}/>
              <Stack.Screen name='OderStatus' component={OderStatus}/>
              <Stack.Screen name='OderManager' component={OderManager}/>
              <Stack.Screen name='Start' component={Start}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}
