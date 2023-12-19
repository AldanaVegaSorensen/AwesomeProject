import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    boton:{
        backgroundColor:'#C9D9F7',
        height:33, 
        width:80,
        borderRadius:15,
        overflow:'hidden'
    },
    container2:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width:'40%',
        borderRadius:20
    },
    text:{
        color:'white',
        fontSize:18
    },
    item: {
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          height:400,
          borderBottomWidth:2,
          borderColor:'#f97d81',
          justifyContent:'center'
        },
        text2: {
          fontSize: 14,
          fontWeight:'bold',
          color:'black',
        },
        image:{
          height:250,
          width:330,
          marginBottom:10,
          borderRadius:5
        }
      

    
})

export {styles}