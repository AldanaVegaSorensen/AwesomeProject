import { View, TouchableOpacity, Linking} from "react-native";
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";



function Boton2(props:any){
    
    return(
        <View>
            <TouchableOpacity onPress={()=>Linking.openURL(props.url)}>
                <FontAwesomeIcon icon={props.icon} style={props.iconStyle} size={50}/>
            </TouchableOpacity>
        </View>
    )
}

export { Boton2 }