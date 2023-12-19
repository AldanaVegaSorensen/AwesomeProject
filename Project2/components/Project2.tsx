import { ScrollView, Text, View } from "react-native";
import {styles} from "./styles"
import {Comp1} from "./comp1"
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter, faSquareYoutube} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import { Boton2 } from "./Boton2";

function Project2 (){
  return (
    <View style={styles.background}>
      <ScrollView>
        <Comp1></Comp1>
        
        <Text style={styles.title}>Información personal</Text>
        <Text style={styles.text}>Taylor Alison Swift (West Reading, Pensilvania; 13 de diciembre de 1989) es una cantautora, productora, directora, actriz y empresaria estadounidense. Criada en Wyomissing (Pensilvania), se mudó a Nashville (Tennessee) a los 14 años para realizar una carrera de música country. Firmó con la compañía discográfica independiente Big Machine Records y se convirtió en la artista más joven contratada por Sony/ATV Music Publishing House. En 2006 lanzó su álbum debut homónimo, que la estableció como una estrella en la música Pop. «Our Song», su tercer sencillo, la convirtió en la persona más joven en escribir temas de forma solista e interpretar una canción número uno en la lista de Hot Country Songs. En 2008 recibió una nominación a mejor artista nuevo en la 50.ª edición de los Premios Grammy. </Text>
        <Text style={styles.title}>Influencias musicales</Text>
        <Text style={styles.text}> Uno de los primeros recuerdos musicales de Swift es escuchar a su abuela materna, Marjorie Finlay, cantar en la iglesia. Cuando era niña, disfrutaba de las bandas sonoras de las películas de Disney: "Mis padres se dieron cuenta de que, una vez que se me acababan las palabras, me inventaba las mías".180​ Swift ha dicho que le debe su confianza a su madre, quien la ayudó a prepararse para las presentaciones en clase cuando era niña. También atribuye su "fascinación por la escritura y la narración" a su madre. Swift se sintió atraída por el aspecto narrativo de la música country,​ y se introdujo en el género escuchando a "las grandes artistas del country de los 90": Shania Twain, Faith Hill y las Dixie Chicks ".</Text>
        <Text style={styles.text}> Swift también ha sido influenciada por varios artistas de pop y rock. Enumera a Paul McCartney, Bruce Springsteen, Bryan Adams,​ Emmylou Harris, Kris Kristofferson y Carly Simon como modelos a seguir en su carrera. Al hablar de McCartney y Harris, Swift ha dicho: "Se han arriesgado, pero también han sido el mismo artista durante toda su carrera".</Text>
        <Text style={styles.text}> A ella le gusta Springsteen por ser" tan relevante musicalmente después de un período de tiempo tan largo".196​ Aspira a ser como Harris a medida que envejece debido a que prioriza la música sobre la fama. Swift dice de Kristofferson que "brilla en la composición de canciones", y admira a Simon por ser "una persona emocional" pero "fuerte".199​ Su álbum de synth-pop 1989 fue influenciado por algunos de sus actos de pop favoritos de los 80, incluidos Peter Gabriel, Annie Lennox, Phil Collins y Madonna. Como compositora, Swift fue influenciada por Joni Mitchell por sus letras autobiográficas que transmiten las emociones más profundas: "Ella lo escribió sobre sus dolores más profundos y sus demonios más inquietantes ... Creo que (Blue) es mi favorito porque explora el alma de alguien muy profundamente.
        </Text>
        
        <View style={styles.buttonStyleContainer}>
                <Boton2 icon={faSquareInstagram} 
                        iconStyle={styles.icon}   
                        url='https://www.instagram.com/taylorswift/?hl=es'> 
                </Boton2>
                <Boton2 icon={faSquareXTwitter} 
                        iconStyle={styles.icon}   
                        url='https://twitter.com/taylorswift13'> 
                </Boton2>
                <Boton2 icon={faSquareYoutube} 
                        iconStyle={styles.icon}   
                        url='https://www.youtube.com/@TaylorSwift'> 
                </Boton2>
                <Boton2 icon={faSquareFacebook} 
                        iconStyle={styles.icon}   
                        url='https://www.facebook.com/TaylorSwift/?locale=es_LA'> 
                </Boton2>
                
            </View>

      </ScrollView>
    </View>
  )
}

export { Project2 }