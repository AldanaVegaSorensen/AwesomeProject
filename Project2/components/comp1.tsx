import { Image, Text, View,} from "react-native";
import { comp1Styles } from "./comp1Styles";
import { Boton } from "./Boton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Comp1(){
    return(
        <View style={comp1Styles.container}>
            <Image source={require("../images/Taylor.jpg")} style={comp1Styles.image}></Image>
            
            <Text style={comp1Styles.title}>Taylor Swift</Text>
            <Text style={comp1Styles.subtitle}>Cantante</Text>
            
            <View style={comp1Styles.buttonStyleContainer}>
                <Boton  text={'Email'} 
                        icon={faEnvelope} 
                        style={comp1Styles.boton1} 
                        color={'black'} 
                        url={'https://www.taylorswift.com/'}>
                </Boton>
                <Boton  text={'Linkedin'} 
                        icon={faLinkedin} 
                        style={comp1Styles.boton2} 
                        color={'white'} 
                        url={'https://es.wikipedia.org/wiki/Taylor_Swift'}>
                </Boton>
            </View>
            
        </View>
    )
}

export { Comp1 }