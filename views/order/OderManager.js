import {Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import styles from './styles/OderManager_Styles';
import { AntDesign } from '@expo/vector-icons';
import data from './data/OrderManager_Data';
function OderManager(){
    const renderItem = ({item})=>{
        return (
            <TouchableOpacity style={styles.containerListItem}>
                <View style={styles.containerListItem_Image}>
                    <Image source={item.imageShop} style={{height:100,width:100,borderRadius:20,}}/>
                </View>
                <View style={styles.containerListItem_Text}>
                    <View style={styles.containerListItem_Text_ItemTitle}>
                        <Text style={{fontSize:28,}}>{item.shopName}</Text>
                    </View>
                    <View style={styles.containerListItem_Text_ItemBody}>
                        <Text style={{fontSize:18,marginTop:5,color:"#777777"}}>Address: {item.addressShop}</Text>
                    </View>
                    <View style={styles.containerListItem_Text_ItemBottom}>
                        <View style={{display:'flex',flexDirection:"row", alignItems:'center'}}>
                            <Text style={{fontSize:18,marginTop:5,color:"#339900",marginRight:5,fontWeight:'bold'}}>Ratting: {item.ratting}</Text>
                            <AntDesign name="star" size={14} color="#FFCC33" />
                        </View>
                        <View  style={{display:'flex',flexDirection:"row", alignItems:'center'}}>
                            <Text style={{fontSize:18,marginTop:5,color:"#339900",marginRight:5,fontWeight:'bold'}}>Cost: </Text>
                            <Text style={{fontSize:18,marginTop:5,color:"#339900",marginRight:5,fontWeight:'bold'}}>{item.priceOrder} $</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={{marginLeft:20,}} >
                    <TouchableOpacity style={styles.buttonLeft}>
                        <AntDesign name="arrowleft" size={28} color="black" />
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