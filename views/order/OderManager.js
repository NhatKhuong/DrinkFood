import {Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import styles from './styles/OderManager_Styles';
import { AntDesign } from '@expo/vector-icons';
import data from './data/OrderManager_Data';
function OderManager({navigation}){
    const renderItem = ({item})=>{
        return (
            <TouchableOpacity style={styles.containerListItem}>
                <View style={styles.containerListItem_Image}>
                    <Image source={item.imageShop} style={{height:80,width:80,borderRadius:20,}}/>
                </View>
                <View style={styles.containerListItem_Text}>
                    <View style={styles.containerListItem_Text_ItemTitle}>
                        <Text style={{fontSize:28,color:"white",fontWeight:"600"}}>{item.shopName}</Text>
                    </View>
                    <View style={styles.containerListItem_Text_ItemBottom}>
                        <View style={{display:'flex',flexDirection:"row", alignItems:'center'}}>
                            <Text style={{fontSize:18,marginTop:5,color:"#fff",marginRight:5,fontWeight:'bold'}}>Ratting: {item.ratting}</Text>
                            <AntDesign name="star" size={14} color="#FFCC33" />
                        </View>
                        <View  style={{display:'flex',flexDirection:"row", alignItems:'center'}}>
                            <Text style={{fontSize:18,marginTop:5,color:"#fff",marginRight:5,fontWeight:'bold'}}>Cost: </Text>
                            <Text style={{fontSize:18,marginTop:5,color:"#fff",marginRight:5,fontWeight:'bold'}}>{item.priceOrder} $</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={{marginLeft:20,}}>
                    <TouchableOpacity style={styles.buttonLeft} onPress={()=>navigation.navigate('OderStatus')}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerHeader_Text}>
                    <Text style={styles.containerHeader_Title}>Oder Manager</Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                <FlatList style={{flex:1,}} data={data} renderItem={renderItem}/>
            </View>
        </SafeAreaView>
    );
}


export default OderManager;