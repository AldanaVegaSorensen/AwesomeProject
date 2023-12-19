import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  background:{
    height:'100%',
    backgroundColor:'#28222c'
  },
  title:{
    fontSize:25,
    color:'white',
    marginTop:20,
    marginLeft:20
  },
  text:{
    fontSize:15,
    color:'white',
    marginTop:10,
    marginLeft:20,
    marginRight:20
  },
  buttonStyleContainer: {
    backgroundColor:'#2b2a37',
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    margin: 15,
    justifyContent:'center',
    alignContent:'center',
    borderRadius:10,
    height:70
   },

   icon:{
    margin:10,
    color:'#787879'
   }
})

export { styles }