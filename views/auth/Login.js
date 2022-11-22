import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../config/firebase_config';
import {initializeAuth,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
export default function Login() {
  const navigation = useNavigation();
  const [email,setEmail] = useState("");
    const [passWord,setPassWord] = useState("");
  const hanldPress = () =>{
    navigation.navigate("Register");
  }
  const app = initializeApp(firebaseConfig);
    const auth = initializeAuth(app,{
    });
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const loginWithEmailAndPassword = async (email,password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();

  const hanldPressLogin = ()=>{
      if(email == ""){
        Alert.alert("Thông báo","Email không được rỗng")
      }
      else if(!regexEmail.test(email)){
        Alert.alert("Thông báo","Email không đúng định dạng")
      }
      else if(passWord == ""){
        Alert.alert("Thông báo","Password không được rỗng");
      }
      else{
        loginWithEmailAndPassword(email,passWord)
        .then((result)=>{

          if (!result.user.emailVerified) {
            alert("Email chưa được xác thực vui lòng kiểm tra hộp thư của bạn");
            return;
          }
          const accessToken =`Bearer ${auth.currentUser.stsTokenManager.accessToken}`;
           setEmail("");
           setPassWord("");
           navigation.navigate("Main");
        })
        .catch(error =>{
            Alert.alert("Thông báo","Xảy ra lỗi! \n Mời bạn nhập lại tài khoản và mật khẩu")
        })
      }
    }

    const loginWithGoogle = async () => {
      const user = await signInWithPopup(auth, provider);
      return user;
    };

    const handleLoginWithGoogle = () => {
      loginWithGoogle()
        .then((user) => {
          
        })
        .catch((err) => {
          console.log(err);
          
        });
    };
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
        <TouchableOpacity onPress={hanldPress}>
          <Text style={{ color: '#22a45d' }}> Create new Account</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formLogin}>
        <TextInput onChangeText={x=>setEmail(x)} value={email} style={styles.iptAcc} placeholder="Account" />
        <TextInput onChangeText={x=>setPassWord(x)} value={passWord} secureTextEntry={true} style={styles.iptPass} placeholder="Password" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={{ margin: 10 }} onPress={()=>{navigation.navigate("ForgotPassword")}}>
          <Text style={{ color: 'black' }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={hanldPressLogin}
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
          }}
          onPress={handleLoginWithGoogle}
          >
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