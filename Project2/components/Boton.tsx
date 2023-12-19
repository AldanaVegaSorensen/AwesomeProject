import { Text, View, TouchableOpacity, Linking} from "react-native";
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";



function Boton(props:any){
    
    return(
        <View>
            <TouchableOpacity style={props.style} onPress={()=>Linking.openURL(props.url)}>
                <FontAwesomeIcon icon={props.icon} style={{margin:5, color:props.color}}/>
                <Text style={{margin:5, color:props.color, fontSize:15}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export { Boton }