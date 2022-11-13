import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,

} from 'react-native';


export default function Start() {
  return (
    <View style={styles.wrapper}>
      <Text>Login</Text>
      <TouchableOpacity style={styles.btn_start}>
        <Text style={{color:'white', }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#ffe4c4',
    width:'100%',
    height:500,
    alignItems:'center'
  },
  btn_start: {
    backgroundColor:'#22a45d',
    width:'90%',
    alignItems:'center',
    padding:10,
    borderRadius:10,

  }
})
// Khoa
