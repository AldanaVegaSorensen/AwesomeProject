import { View } from "react-native";
import { Nav } from "./Nav"
import {Body } from "./Body"
/* TODO Hay que hacer un Nav que tenga el icono de react y con una lista y un titulo ademas quiero que en app
     solamente se llame a Project1*/
function Project1 (){
  return (
    <View>
        <Nav></Nav>
        <Body></Body>
    </View>
  )
}

export { Project1 }