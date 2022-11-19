import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase_config";
import {
  initializeAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordAgain, setPassWordAgain] = useState("");
  const hanldPress = () => {
    navigation.navigate("Login");
  };
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {});
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const hanldPressRegister = () => {
    if (email == "") {
      Alert.alert("Thông báo", "Email không được rỗng");
    } else {
      if (
        (!regexEmail.test(email) && passWord == passWordAgain) ||
        (!regexEmail.test(email) && passWord != passWordAgain)
      ) {
        Alert.alert("Thông báo", "Email không hợp lệ");
      } else if (regexEmail.test(email) && passWord != passWordAgain) {
        Alert.alert(
          "Thông báo",
          "Mật khẩu xác nhận không giống với mật khẩu trên"
        );
      } else if (regexEmail.test(email) && passWord == "") {
        Alert.alert("Thông báo", "Mời bạn nhập mật khẩu");
      } else {
        createUserWithEmailAndPassword(auth, email, passWord)
          .then(() => {
            signInWithEmailAndPassword(auth, email, passWord).then(() => {
              Alert.alert("Thông báo", "Đăng ký thành công");
              const accessToken = `Bearer ${auth.currentUser.stsTokenManager.accessToken}`;
              console.log(accessToken);
              setEmail("");
              setPassWord("");
              setPassWordAgain("");
              navigation.navigate("Main");
            });
          })
          .catch((error) => {
            Alert.alert("Thông báo", "Email đã tồn tại");
          });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", marginTop: 5, color: "black" }}>
          Sign up
        </Text>
        <Text></Text>
      </View>
      <View style={styles.nav}>
        <Text style={{ fontSize: 30, color: "black" }}> Create Account </Text>
        <Text style={{ color: "black", paddingLeft: 10 }}>
          Enter your Name, Email and Password
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black", paddingLeft: 10 }}>
            for sign up, Or
          </Text>
          <TouchableOpacity onPress={hanldPress}>
            <Text style={{ color: "#22a45d" }}> Already have Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formRegis}>
        <TextInput
          onChangeText={(x) => setEmail(x)}
          value={email}
          style={styles.iptName}
          placeholder="Email Address"
        />
        <TextInput
          onChangeText={(x) => setPassWord(x)}
          value={passWord}
          secureTextEntry={true}
          style={styles.iptAcc}
          placeholder="Password"
        />
        <TextInput
          onChangeText={(x) => setPassWordAgain(x)}
          value={passWordAgain}
          secureTextEntry={true}
          style={styles.iptPass}
          placeholder="Password Again"
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <TouchableOpacity
          onPress={hanldPressRegister}
          style={{
            backgroundColor: "#22a45d",
            width: "90%",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 80 }}>
        <Text style={{ color: "black" }}>Already have account?</Text>
        <TouchableOpacity onPress={hanldPress}>
          <Text
            style={{
              marginLeft: 10,
              color: "#22a45d",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ color: "black" }}>OR</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#395998",
            width: "90%",
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 30, height: 30, marginLeft: 10 }}
            source={require("./images/face_logo.jpg")}
          />
          <Text style={{ color: "white", marginLeft: 35 }}>
            CONNECT WITH FACEBOOK
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#4285f4",
            width: "90%",
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 30, height: 30, marginLeft: 10 }}
            source={require("./images/logo_google.png")}
          />
          <Text style={{ color: "white", marginLeft: 35 }}>
            CONNECT WITH GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor:'#ffe4c4',
    backgroundColor: "white",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nav: {
    width: "100%",
    height: 80,
    marginTop: 10,
    flexDirection: "column",
  },
  formRegis: {
    alignItems: "center",
  },
  iptName: {
    backgroundColor: "#fafbfa",
    width: "90%",
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    color: "#787878",
    borderRadius: 10,
  },
  iptAcc: {
    backgroundColor: "#fafbfa",
    width: "90%",
    height: 40,
    paddingLeft: 10,
    color: "#787878",
    borderRadius: 10,
    marginTop: 10,
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
});
// Khoa
