import { View, Text, TouchableOpacity,TextInput,Image,ScrollView} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Radio, NativeBaseProvider, Center } from "native-base";

export default function Voucher() {
  const [isChecked, setChecked] = useState(false);
  return (
      <NativeBaseProvider>
        <View style={{backgroundColor:"#000",flex:1,paddingLeft:10, paddingRight:10}}>
          <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',flex:0.1,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Ionicons name="chevron-back-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={{color:"#fff", fontSize:20, fontWeight:'bold'}}>Voucher</Text>
            <View>
                <Ionicons name="heart-sharp" size={24} color="#000" />
            </View>
          </View>
          <View style={{flex:0.1}}>
            <View style={{backgroundColor:"#fff", display:'flex', flexDirection:"row",alignItems:"center",width:"100%",borderRadius:10, paddingRight:10}}>
              <TextInput placeholder='Nhập mã giảm giá' style={{borderWidth:1, flex:1, height:40, borderColor:"#fff",backgroundColor:"#fff", borderRadius:10,fontSize:16, paddingLeft:20}}></TextInput>
              <EvilIcons name="search" size={24} color="#000" />
              
            </View>
          </View>
          <View style={{flex:0.4}}>
            <Radio.Group>
            <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>Ưu đãi vận chuyển</Text>
            <Text style={{color:"#d4ed9b", fontSize:16}}>Có thể chọn 1 Voucher</Text>
            <View style={{display:"flex", flexDirection:"row", backgroundColor:"#fff",borderRadius:20, marginTop:10}}>
              <View style={{flex:0.35}}>
                <Image style={{width:100, height:100, borderRadius:20}} source={require('../images/freeship.jpg')}></Image>
              </View>
              <View style={{justifyContent:"center",flex:0.45}}>
                <Text style={{color:"#757575", fontSize:16}}>Tất cả các hình thức thanh toán</Text>
                <Text style={{color:"#fff", color:"#2cc167", fontWeight:"bold"}}>Sắp hết hạn: Còn 1 ngày</Text>
              </View>
              <View style={{flex:0.2, alignItems:"center",justifyContent:"center"}}>
              {/* <Checkbox
                  style={{width:20, height:20}}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={true ? '#4630EB' : undefined}
                /> */}
                <Radio value="one" my={1} style={{width:20, height:20}} ><Text style={{opacity:0}}>a</Text></Radio>
                 
               
              </View>
            </View>

            <View style={{display:"flex", flexDirection:"row", backgroundColor:"#fff",borderRadius:20, marginTop:10}}>
              <View style={{flex:0.35}}>
                <Image style={{width:100, height:100, borderRadius:20}} source={require('../images/freeship.jpg')}></Image>
              </View>
              <View style={{justifyContent:"center",flex:0.45}}>
                <Text style={{color:"#757575", fontSize:16}}>Thanh toán qua ví điện tử</Text>
                <Text style={{color:"#fff", color:"#2cc167", fontWeight:"bold"}}>Sắp hết hạn: Còn 1 ngày</Text>
              </View>
              <View style={{flex:0.2, alignItems:"center",justifyContent:"center"}}>

              <Radio value="two" my={1} style={{width:20, height:20}} ><Text style={{opacity:0}}>a</Text></Radio>

              </View>
            </View>
            </Radio.Group>
          </View>
          <View style={{flex:0.4}}>
            <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>Mã giảm giá/hoàn xu</Text>
            <Text style={{color:"#d4ed9b", fontSize:16}}>Có thể chọn 1 Voucher</Text>
            
            <ScrollView style={{height:400}}>
            <Radio.Group>

              <View style={{display:"flex", flexDirection:"row", backgroundColor:"#fff",borderRadius:20, marginTop:10}}>
                <View style={{flex:0.35}}>
                  <Image style={{width:100, height:100, borderRadius:20}} source={require('../images/magiam1.png')}></Image>
                </View>
                <View style={{justifyContent:"center",flex:0.45}}>
                  <Text style={{color:"#757575", fontSize:16}}>Tất cả các hình thức thanh toán</Text>
                  <Text style={{color:"#fff", color:"#2cc167", fontWeight:"bold"}}>Sắp hết hạn: Còn 1 ngày</Text>
                </View>
                <View style={{flex:0.2, alignItems:"center",justifyContent:"center"}}>
                <Radio value="one" my={2} style={{width:20, height:20}} ><Text style={{opacity:0}}>a</Text></Radio>
              </View>
              </View>

              <View style={{display:"flex", flexDirection:"row", backgroundColor:"#fff",borderRadius:20, marginTop:10}}>
                <View style={{flex:0.35}}>
                  <Image style={{width:100, height:100,borderRadius:20,resizeMode:'cover'}} source={require('../images/magiam2.jpg')}></Image>
                </View>
                <View style={{justifyContent:"center",flex:0.45}}>
                  <Text style={{color:"#757575", fontSize:16}}>Thanh toán qua ví điện tử</Text>
                  <Text style={{color:"#fff", color:"#2cc167", fontWeight:"bold"}}>Sắp hết hạn: Còn 1 ngày</Text>
                </View>
              <View style={{flex:0.2, alignItems:"center",justifyContent:"center"}}>
               <Radio value="two" my={2} style={{width:20, height:20}} ><Text style={{opacity:0}}>a</Text></Radio>
              </View>
              </View>
              </Radio.Group>
            </ScrollView>
          </View>
          
          <TouchableOpacity style={{backgroundColor:"#2cc167", width:"100%",height:50, borderRadius:5, borderColor:"#fff",alignSelf:"center",alignItems:"center", justifyContent:"center"}}>
              <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
        </NativeBaseProvider>
  )
}