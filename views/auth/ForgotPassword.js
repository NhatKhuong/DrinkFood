import { View,Text,TouchableOpacity,TextInput, Alert, StyleSheet, Dimensions,ScrollView, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// Import FireBase
import{initializeAuth,sendPasswordResetEmail} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../config/firebase_config';
const images = [
    'https://wallpapercrafter.com/th800/303544-Food-Coffee-Phone-Wallpaper.jpg',
    'https://media.istockphoto.com/photos/steaming-coffee-or-tea-cup-on-dark-background-with-reflection-picture-id955657556?k=20&m=955657556&s=612x612&w=0&h=f3gkdTJhDa0uCppZWXYpTfxKyz-gnSu5IAjY9BaWdMQ=',
    'https://images.unsplash.com/photo-1543233604-3baca4d35513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80',
  ];
  
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
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
        <View style={styles.container}>
          
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
                <View>
                     <View style={styles.containerTabBar}>
                    <TouchableOpacity onPress={hanldPressDashBoard} style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{width:"73%",justifyContent:'center',paddingTop:10,alignItems:'center'}}>
                        <Text style={{fontSize:22,color:"#fff"}}>Forgot Password</Text>
                    </View>
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
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
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
export default ForgotPassword;