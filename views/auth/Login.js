import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 5, color: 'black' }}>
          Sign in
        </Text>
        <Text></Text>
      </View>
      <View style={styles.nav}>
        <Text style={{ fontSize: 30, color: 'black' }}> Welcome to </Text>
        <Text style={{ color: 'black', paddingLeft: 5 }}>
          {' '}
          Enter your Phone number or Email{' '}
        </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{ color: 'black', paddingLeft: 10 }}>for sign in, Or</Text>
        <TouchableOpacity>
          <Text style={{ color: '#22a45d' }}> Create new Account</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formLogin}>
        <TextInput style={styles.iptAcc} placeholder="Account" />
        <TextInput style={styles.iptPass} placeholder="Password" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text style={{ color: 'black' }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#22a45d',
            width: '90%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{ color: 'white' }}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={{ color: 'black' }}>OR</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#395998',
            width: '90%',
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <Image
            style={{ width: 25, height: 25, marginLeft: 10 }}
            source={require('./images/face_logo.jpg')}
          />
          <Text style={{ color: 'white', marginLeft: 35 }}>
            CONNECT WITH FACEBOOK
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#4285f4',
            width: '90%',
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <Image
            style={{ width: 25, height: 25, marginLeft: 10 }}
            source={require('./images/logo_google.png')}
          />
          <Text style={{ color: 'white', marginLeft: 35 }}>
            CONNECT WITH GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // marginTo:100,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    // alignItems:'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  nav: {
    width: '100%',
    height: 100,
    marginTop: 20,
    flexDirection: 'column',
  },
  formLogin: {
    alignItems: 'center',
  },
  iptAcc: {
    backgroundColor: '#fafbfa',
    width: '90%',
    height: 40,
    paddingLeft: 10,
    color: '#787878',
    borderRadius: 10,
  },
  iptPass: {
    backgroundColor: '#fafbfa',
    width: '90%',
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    color: '#787878',
    borderRadius: 10,
  },
});
// Khoa
