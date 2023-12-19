import { StyleSheet } from "react-native";

const comp1Styles= StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center'
  },

  image:{
      height: 200,
      width:200,
      borderRadius:10,
      margin:15
    },

  title:{
    fontSize:30,
    color:'white'
  },

  subtitle:{
    fontSize:13,
    color:'pink'
  },
   boton1:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    flex: 1,
    flexDirection: 'row',
    width:110,
    height:35,
    margin:10
   },
   boton2:{
    backgroundColor:'#4f93e1',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    flexDirection: 'row',
    borderRadius:5,
    width:110,
    height:35,
    margin:10
   },

buttonStyleContainer: {
   flex: 1,
   flexDirection: 'row',
   marginHorizontal: 20,
    marginTop: 5,
  },
  icon:{
   height:'50%', 
   margin:5
  }
})

export { comp1Styles }