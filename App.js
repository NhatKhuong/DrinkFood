import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import OderManager from './views/order/OderManager';
import OderStatus from './views/order/OderStatus';
import Detail from './views/product/Detail';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'OderStatus'} screenOptions={{headerShown:false}}>
              {/* <Stack.Screen name='OderStatus' component={OderStatus}/>
              <Stack.Screen name='OderManager' component={OderManager}/> */}
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Detail' component={Detail}/>

              
          </Stack.Navigator>
      </NavigationContainer>
    );
}