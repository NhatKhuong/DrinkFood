import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCC99',
    },
    containerHeader:{
      flex: 0.2,
      display:'flex',
      flexDirection:'row',
      alignItems:"center",
    },
    buttonLeft:{
      padding:10,
      backgroundColor:"#EEEEEE",
      borderRadius:100,
    },
    containerHeader_Text:{
      marginRight:50,
      flex:1,
      alignItems:"center",
      padding:10,
    },
    containerHeader_Title:{
      fontSize:28,
    },
    containerBody:{
        flex:0.8,
        marginLeft:10,
        marginRight:10,
    },
    containerListItem:{
      borderWidth:0.5,
      borderColor:"black",
      height:150,
      marginBottom:20,
      display:'flex',
      flexDirection:'row',
      borderRadius:20,
      flex:1,
      backgroundColor:"#EEEEEE"
    },
    containerListItem_Image:{
      flex:0.35,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
    },
    containerListItem_Text:{
      flex:0.6,
      borderRadius:20,
      marginTop:10,
      marginBottom:10,
    },
    containerListItem_Text_ItemTitle:{
      flex:0.25,
    },
    containerListItem_Text_ItemBody:{
      flex:0.5,
    },
    containerListItem_Text_ItemBottom:{
      flex:0.25,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
  });

export default styles;
