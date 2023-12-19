import {Image, View } from "react-native";
import { navStyle } from "./navStyle";
function Nav (){
   return( 
    <View style={navStyle.container}>
          <Image source={require("../images/airbnb_logo.png")} style={navStyle.image}></Image>
    </View>
    )
}

export {Nav}