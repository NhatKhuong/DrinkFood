import { View, Text, Image, SafeAreaView,TextInput,TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';

export default function Home({navigation}) {
    const [items, setItems] = useState([
        { img:require("../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../images/coffe2.webp"),descrip:"with chocolate",name: 'Trung Nguyen',price:22.22},
        { img:require("../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
      ]);
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#000", paddingTop:55, paddingLeft:15, paddingRight:15}}>
      <View style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
        <View style={{borderWidth:1, borderRadius:5, borderColor:"#fff"}}>
            <Ionicons name="menu-outline" size={24} color="#fff" />
        </View>
        <View>
            <AntDesign name="bells" size={24} color="#fff" />
        </View>
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontSize:25, width:200, color:"#2cc167", fontWeight:"bold"}}>Fast and Delicious Food</Text>
      </View>
      <View style={{marginTop:20, backgroundColor:"#fff", display:'flex', flexDirection:"row",alignItems:"center",width:"100%",borderRadius:10, paddingRight:10}}>
        <TextInput style={{borderWidth:1, flex:1, height:40, borderColor:"#fff",backgroundColor:"#fff", borderRadius:10,fontSize:16, paddingLeft:20}}></TextInput>
        <EvilIcons name="search" size={24} color="#000" />
      </View>
      <View style={{display:"flex",flexDirection:"row", marginTop:20}}>
        <View style={{marginRight:30, alignItems:"center", justifyContent:"center"}}>
            <Entypo name="location-pin" size={24} color="#fff" />
        </View>
        <View>
            <Text style={{fontSize:16, fontWeight:"bold", color:"#ccc"}}>Adress</Text>
            <Text style={{color:"#2cc167", fontSize:16,fontWeight:"bold"}}>12 - Nguyen Van Bao - HCM</Text>
        </View>
      </View>
      <View style={{marginTop:20,display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"#2cc167", width:80,height:35, borderRadius:5, borderColor:"#fff",alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#2cc167", width:80,height:35, borderRadius:5, borderColor:"#fff",alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}>Fast Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#2cc167", width:80,height:35, borderRadius:5, borderColor:"#fff",alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}>Drink</Text>
        </TouchableOpacity>
      </View>
      <FlatGrid
            itemDimension={130}
            data={items}
            style={{marginTop: 10, backgroundColor:"#000", height:400}}
            spacing={10}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Detail',{img:item.img,name:item.name})}>
                    <Image style={{width:150, height:150, borderRadius:10,resizeMode: 'stretch'}} source={item.img}/>
                    <Text style={{fontSize:16, fontWeight:"bold"}}>{item.name}</Text>
                    <Text  style={{color:"#c67c4e", fontSize:14}}>{item.descrip}</Text>
                    <View style={{display:"flex", flexDirection:"row", width:150, justifyContent:"space-between"}}>
                        <Text style={{color:"#c67c4e", fontSize:16, fontWeight:"bold"}}>${item.price}</Text>
                        <Image style={{width:20, height:20, borderRadius:5}} source={require("../images/btnadd.png")} />
                    </View>
                    
                </TouchableOpacity>
            )}
            />
    </SafeAreaView>
  )
}