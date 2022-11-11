import {  Text, View,Image, SafeAreaView,TouchableOpacity} from 'react-native';
import styles from "./styles/OderStatus_Styles"
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
function OderStatus(){
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={{marginLeft:20,}} >
                    <TouchableOpacity style={styles.buttonLeft}>
                        <AntDesign name="arrowleft" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerHeader_Text}>
                    <Text style={styles.containerHeader_Title}>OderStatus</Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                <View style={styles.containerBody_Image}>
                    <Image source={require('../../images/imageOrderStatus.jpg')} style={{height:"80%",width:"80%",borderRadius:20,}}/>
                </View>
                <View style={styles.containerBody_Status}>
                    <View style={styles.containerBody_Status_Item}>
                        <View style={styles.containerBody_Status_ItemIcon}>
                            <AntDesign name="checkcircleo" size={24} color="white" />
                        </View>
                        <View style={styles.containerBody_Status_ItemText}>
                            <Text style={{fontSize:22,color:'white'}}>Delivered</Text>
                            <Text style={{fontSize:16,color:'white'}}>Drinks, June 07, 6:20 PM</Text>
                        </View>
                    </View>
                    <View style={styles.containerBody_Status_ItemStatus}>
                        <View style={styles.containerBody_Status_ItemStatus_Item}>
                            <View style={styles.containerBody_Status_ItemIcon}>
                            </View>
                            <View style={styles.containerBody_Status_ItemText}>
                                <Text style={{fontSize:22,color:'black'}}>Order Recevied</Text>
                                <View style={styles.containerBody_Status_ItemText_View}>
                                    <Feather name="clock" size={20} color="#669933" style={{marginRight:10,}} />
                                    <Text style={{fontSize:16,color:'#999999'}}>5:48 PM, 07 June 2022</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerBody_Status_ItemStatus_Item}>
                            <View style={styles.containerBody_Status_ItemIcon}>
                            </View>
                            <View style={styles.containerBody_Status_ItemText}>
                                <Text style={{fontSize:22,color:'black'}}>On The Way</Text>
                                <View style={styles.containerBody_Status_ItemText_View}>
                                    <Feather name="clock" size={20} color="#669933" style={{marginRight:10,}} />
                                    <Text style={{fontSize:16,color:'#999999'}}>5:55 PM, 07 June 2022</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerBody_Status_ItemStatus_Item}>
                            <View style={styles.containerBody_Status_ItemIcon}>
                            </View>
                            <View style={styles.containerBody_Status_ItemText}>
                                <Text style={{fontSize:22,color:'black'}}>Delivered</Text>
                                <View style={styles.containerBody_Status_ItemText_View}>
                                    <Feather name="clock" size={20} color="#669933" style={{marginRight:10,}} />
                                    <Text style={{fontSize:16,color:'#999999'}}>Finish Time in 25 Min</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerFooter}>
                <TouchableOpacity style={styles.buttonConfirm}>
                    <View style={{justifyContent:'center',alignContent:'center'}}>
                        <Text style={{fontSize:22,color:'white'}}>Confirm Delivery</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


export default OderStatus;