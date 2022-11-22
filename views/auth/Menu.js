import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Menu({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar animated={true} backgroundColor="white" />
      </View>
      <View style={styles.nav}>
        <TouchableOpacity>
          <AntDesign
            name="leftcircleo"
            size={35}
            color="white"
            style={{ marginTop: 20, marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View style={{ width: '60%', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              flexDirection: 'row',
              marginRight:30
            }}>
            <FontAwesome name="user-circle-o" size={40} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                marginLeft:20
              }}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '70%', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              flexDirection: 'row',
              marginLeft:20
            }}>
            <FontAwesome5 name="shopping-cart" size={40} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                // paddingLeft:30
                marginLeft:20
              }}>
              My Orders
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '60%', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <AntDesign name="hearto" size={40} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                marginLeft: 30,
              }}>
              Favorite
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '60%', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Entypo name="shopping-bag" size={40} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                marginLeft: 30,
              }}>
              Delivery
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '60%', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Ionicons name="settings-outline" size={40} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                marginLeft: 30,
              }}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logOut}>
        <View style={{ width: '60%', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Entypo name="log-out" size={40} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                marginLeft: 30,
              }}>
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
    backgroundColor: 'black',
  },
  header: {
    flex: 0.05,
    backgroundColor: 'white',
  },
  nav: {
    flex: 0.1,
    backgroundColor: 'black',
  },
  box: {
    flex: 0.45,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  logOut:{
    flex:0.1,
    backgroundColor:'black'  
  },
  footer: {
    flex: 0.3,
    backgroundColor: 'black',
  },
});
