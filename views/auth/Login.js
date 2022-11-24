import React, { useState } from "react";
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
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase_config";
import {
  initializeAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const images = [
  "https://wallpapercrafter.com/th800/303544-Food-Coffee-Phone-Wallpaper.jpg",
  "https://media.istockphoto.com/photos/steaming-coffee-or-tea-cup-on-dark-background-with-reflection-picture-id955657556?k=20&m=955657556&s=612x612&w=0&h=f3gkdTJhDa0uCppZWXYpTfxKyz-gnSu5IAjY9BaWdMQ=",
  "https://images.unsplash.com/photo-1543233604-3baca4d35513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const hanldPress = () => {
    navigation.navigate("Register");
  };
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {});
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const loginWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();

  const hanldPressLogin = () => {
    if (email == "") {
      Alert.alert("Thông báo", "Email không được rỗng");
    } else if (!regexEmail.test(email)) {
      Alert.alert("Thông báo", "Email không đúng định dạng");
    } else if (passWord == "") {
      Alert.alert("Thông báo", "Password không được rỗng");
    } else {
      loginWithEmailAndPassword(email, passWord)
        .then((result) => {
          if (!result.user.emailVerified) {
            alert("Email chưa được xác thực vui lòng kiểm tra hộp thư của bạn");
            return;
          }
          const accessToken = `Bearer ${auth.currentUser.stsTokenManager.accessToken}`;
          setEmail("");
          setPassWord("");
          navigation.navigate("Main");
        })
        .catch((error) => {
          Alert.alert(
            "Thông báo",
            "Xảy ra lỗi! \n Mời bạn nhập lại tài khoản và mật khẩu"
          );
        });
    }
  };

  const loginWithGoogle = async () => {
    const user = await signInWithPopup(auth, provider);
    return user;
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((user) => {})
      .catch((err) => {
        console.log(err);
      });
  };

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
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <ImageBackground
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            >
              <View style={{ opacity: 0.9 }}>
                <View style={styles.header}>
                  <TouchableOpacity>
                    {/* <Ionicons name="chevron-back" size={24} color="white" /> */}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 5,
                      color: "white",
                    }}
                  >
                    Sign in
                  </Text>
                  <Text></Text>
                </View>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <Image
                    style={{
                      width: 200,
                      height: 200,
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 100,
                      marginTop: 70,
                    }}
                    source={require("../../images/Login.png")}
                  />
                </View>
                <View style={styles.formLogin}>
                  <TextInput
                    onChangeText={(x) => setEmail(x)}
                    value={email}
                    style={styles.iptAcc}
                    placeholder="Account"
                  />
                  <TextInput
                    onChangeText={(x) => setPassWord(x)}
                    value={passWord}
                    secureTextEntry={true}
                    style={styles.iptPass}
                    placeholder="Password"
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => {
                      navigation.navigate("ForgotPassword");
                    }}
                  >
                    <Text style={{ color: "white" }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={hanldPressLogin}
                    style={{
                      backgroundColor: "#0087cd",
                      width: "90%",
                      alignItems: "center",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>SIGN IN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={hanldPress}
                    style={{
                      backgroundColor: "#0087cd",
                      width: "90%",
                      alignItems: "center",
                      padding: 10,
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>REGISTER</Text>
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
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // marginTo:100,
    backgroundColor: "white",
    width: "100%",
    // alignItems:'center'
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  nav: {
    width: "100%",
    height: 100,
    marginTop: 20,
    flexDirection: "column",
  },
  formLogin: {
    alignItems: "center",
  },
  iptAcc: {
    backgroundColor: "#fafbfa",
    width: "90%",
    height: 40,
    paddingLeft: 10,
    color: "#787878",
    borderRadius: 10,
  },
  iptPass: {
    backgroundColor: "#fafbfa",
    width: "90%",
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    color: "#787878",
    borderRadius: 10,
  },
  wrap: {
    width: WIDTH,
    resizeMode: "stretch",
    flex: 1,
  },

  warpDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
