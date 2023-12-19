import {Image, View, Text } from "react-native";
import { bodyStyles } from "./bodyStyles";
import { Lista} from "./Lista";

function Body (){
   return( 
    <View style={bodyStyles.container}>
        <Text style={bodyStyles.titulo}>Top 5 profesores:</Text>
        <Lista></Lista>
        <Image source={require("../images/react-meme.jpg")} style={bodyStyles.image}></Image>
    </View>
    )
}

export {Body}