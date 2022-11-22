import { View,Text,TouchableOpacity,TextInput, Alert, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// Import FireBase
import{initializeAuth,sendPasswordResetEmail} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../config/firebase_config';
function ForgotPassword(){
    
    const [email,setEmail] = useState("");
    const navigation = useNavigation();
    const hanldPressDashBoard = () => {
        navigation.navigate("Login");
    };
    
    // Connect FireBase
    const app = initializeApp(firebaseConfig);
    const auth = initializeAuth(app,{
    });
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const hanldPressLinkResert = ()=>{
        if(email == ""){
            console.log("Email không rỗng")
        }
        else if(regexEmail.test(email)){
            sendPasswordResetEmail(auth,email).then(()=>{
                Alert.alert("Thông báo","Link reset đã gởi về email của bạn");
                navigation.navigate("Login");
            }).catch((err)=>{
                console.log(err);
                Alert.alert("Thông báo","Xảy ra lỗi");
            });
        }
        else{
            Alert.alert("Thông báo","Email của bạn không hợp lệ")
        }
       
    }
    return (
        <View style={styles.container}>
             <View style={styles.containerTabBar}>
                    <TouchableOpacity onPress={hanldPressDashBoard} style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
                        <Ionicons name="arrow-back" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={{width:"73%",justifyContent:'center',paddingTop:10,alignItems:'center'}}>
                        <Text style={{fontSize:22,}}>Forgot Password</Text>
                    </View>
            </View>
            <View style={styles.containerText}>
                <Text style={{fontSize:18,}}>Vui lòng nhập Email để lấy lại mật khẩu</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput onChangeText={x=>setEmail(x)} value={email} style={styles.iptName} placeholder="Email Address" />
            </View>
            <View style={styles.containerBottom}>
                <View></View>
                <TouchableOpacity onPress={hanldPressLinkResert} style={styles.bottom} >
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    
    containerTabBar:{
    height: "8%",
    padding:5,
    display:'flex',
    flexDirection:'row',
    },
    containerText:{
        height:"5%",
        backgroundColor:'#F5FFFA',
        justifyContent:'center',
        alignItems:'center',
    },
    containerInput:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    containerBottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:15,
        paddingTop:60,
    },
    bottom:{
        height:40,
        backgroundColor:'#22a45d',
        width:60,
        justifyContent:'center',
        alignItems:'center'
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
});
export default ForgotPassword;