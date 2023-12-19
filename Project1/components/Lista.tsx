import { Text, View } from "react-native";
import { bodyStyles } from "./bodyStyles"
function Lista(){

  const nombres= ["Laura","Guillermo","Agustina","Javi","Rafa"];
  const lista =nombres.map(item => (
    <View  key={item}>
      <Text style={bodyStyles.texto}>{'\u2022 '}{ item}</Text>
    </View>
 ))
 
  return(
    <View>
     {lista}
    </View>
  )
}

export { Lista }