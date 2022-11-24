import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../config/firebase_config';
import {initializeAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';

const images = [
  'https://wallpapercrafter.com/th800/303544-Food-Coffee-Phone-Wallpaper.jpg',
  'https://media.istockphoto.com/photos/steaming-coffee-or-tea-cup-on-dark-background-with-reflection-picture-id955657556?k=20&m=955657556&s=612x612&w=0&h=f3gkdTJhDa0uCppZWXYpTfxKyz-gnSu5IAjY9BaWdMQ=',
  'https://images.unsplash.com/photo-1543233604-3baca4d35513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Register() {
  const navigation = useNavigation();
  const [email,setEmail] = useState("");
  const [passWord,setPassWord] = useState("");
  const [passWordAgain,setPassWordAgain] = useState("");
  const hanldPress = () =>{
    navigation.navigate("Login");
  }
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app,{
  });
  const singUpWithEmailAndPassword = async (email,password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        sendEmailVerification(user)
    })
    return result;
};
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const hanldPressRegister = ()=>{
    if(email == ""){
        Alert.alert("Thông báo","Email không được rỗng")
    }
    else {
        if(!regexEmail.test(email)&& passWord == passWordAgain || !regexEmail.test(email)&& passWord != passWordAgain){
            Alert.alert("Thông báo","Email không hợp lệ")
        }
        else if(regexEmail.test(email) && passWord != passWordAgain) {
            Alert.alert("Thông báo","Mật khẩu xác nhận không giống với mật khẩu trên")
        }
        else if(regexEmail.test(email) && passWord == "") {
            Alert.alert("Thông báo","Mời bạn nhập mật khẩu")
        }
        else 
        {
            singUpWithEmailAndPassword(email, passWord)
            .then((user) => {
              Alert.alert("Thông báo", "Đăng ký thành công, vui lòng kiểm tra Email");
              setEmail("");
              setPassWord("");
              setPassWordAgain("");
              navigation.navigate("Login");
          })
          .catch((error) => {
            Alert.alert("Thông báo","Email đã tồn tại")
          });
        }
        
        
    }
}

const [imgActive, setImgActive] = useState(0);

const onchange = (nativeEvent) => {
  if (nativeEvent) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide != imgActive) {
      setImgActive(slide);
    }
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <ImageBackground
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{ uri: e }}
              >
                <View style={{justifyContent:'center',width:"100%",flex:1}}>

                            <View style={styles.header}>
                    <TouchableOpacity>
                      {/* <Ionicons name="chevron-back" size={24} color="white" /> */}
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', marginTop: 5, color: 'white' }}>
                      Sign up
                    </Text>
                    <Text></Text>
                  </View>
                  <View style={styles.formRegis}>
                    <TextInput onChangeText={x=>setEmail(x)} value={email} style={styles.iptName} placeholder="Email Address" />
                    <TextInput onChangeText={x=>setPassWord(x)} value={passWord} secureTextEntry={true} style={styles.iptAcc} placeholder="Password" />
                    <TextInput onChangeText={x=>setPassWordAgain(x)} value={passWordAgain} secureTextEntry={true} style={styles.iptPass} placeholder="Password Again" />
                  </View>

                  <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity onPress={hanldPressRegister}
                      style={{
                        backgroundColor: '#0087cd',
                        width: '90%',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 10,
                      }}>
                      <Text style={{ color: 'white' }}>SIGN UP</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 80 }}>
                    <Text style={{ color: 'white' }}>Already have account?</Text>
                    <TouchableOpacity onPress={hanldPress}>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: '#0087cd',
                        }}>
                        Sign in
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            ))}
          </ScrollView>
          <View style={styles.warpDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
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
    marginTop: 20,
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
    marginTop: 30,
  },
  iptPass: {
    backgroundColor: '#fafbfa',
    width: '90%',
    height: 40,
    paddingLeft: 10,
    marginTop: 30,
    color: '#787878',
    borderRadius: 10,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT,
  },
  
  warpDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'white',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});