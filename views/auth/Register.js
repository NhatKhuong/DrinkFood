import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 5, color: 'black' }}>
          Sign up
        </Text>
        <Text></Text>
      </View>
      <View style={styles.nav}>
        <Text style={{ fontSize: 30, color: 'black' }}> Create Account </Text>
        <Text style={{ color: 'black', paddingLeft: 10 }}>
          Enter your Name, Email and Password
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black', paddingLeft: 10 }}>
            for sign up, Or
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#22a45d' }}> Already have Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formRegis}>
        <TextInput style={styles.iptName} placeholder="Full Name" />
        <TextInput style={styles.iptAcc} placeholder="Email Address" />
        <TextInput style={styles.iptPass} placeholder="Password" />
      </View>

      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#22a45d',
            width: '90%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{ color: 'white' }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 80 }}>
        <Text style={{ color: 'black' }}>Already have account?</Text>
        <TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              color: '#22a45d',
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
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
            style={{ width: 30, height: 30, marginLeft: 10 }}
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
            style={{ width: 30, height: 30, marginLeft: 10 }}
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
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor:'#ffe4c4',
    backgroundColor: 'white',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nav: {
    width: '100%',
    height: 80,
    marginTop: 10,
    flexDirection: 'column',
  },
  formRegis: {
    alignItems: 'center',
  },
  iptName: {
    backgroundColor: '#fafbfa',
    width: '90%',
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    color: '#787878',
    borderRadius: 10,
  },
  iptAcc: {
    backgroundColor: '#fafbfa',
    width: '90%',
    height: 40,
    paddingLeft: 10,
    color: '#787878',
    borderRadius: 10,
    marginTop: 10,
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
