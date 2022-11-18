import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    containerHeader:{
      flex: 0.2,
      display:'flex',
      flexDirection:'row',
      alignItems:"center",
    },
    buttonLeft:{
      padding:7,
      backgroundColor:"#444444",
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
      color:'white',
    },
    containerBody:{
        flex:0.65,
    },
    containerFooter:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
      },
    containerBody_Image:{
      flex:0.3,
      marginRight:20,
      marginLeft:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#4F4F4F",
      borderRadius:20,
    },
    containerBody_Status:{
      flex:0.7,
      marginRight:20,
      marginLeft:20,
    },
    containerBody_Status_Item:{
      flex:0.25,
      backgroundColor:'#54FF9F',
      borderRadius:20,
      display:'flex',
      flexDirection:'row',
      alignItems:"center"
    },
    containerBody_Status_ItemIcon:{
      flex:0.2,
      alignItems:"center"
    },
    containerBody_Status_ItemText:{
      flex:0.8,
    },
    containerBody_Status_ItemStatus:{
      flex:0.75,
    },
    containerBody_Status_ItemStatus_Item:{
      flex:0.33,
      display:'flex',
      flexDirection:'row',
      alignItems:"center"
    },
    containerBody_Status_ItemText_View:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
    },
    buttonConfirm:{
      backgroundColor:'#54FF9F',
      width:"85%",
      flex:0.5,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
    }
  });

export default styles;
