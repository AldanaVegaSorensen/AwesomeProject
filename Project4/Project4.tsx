import { Button, Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles'
import React, { useEffect, useState } from "react";

 

function Project4(){
    const [count, setCount] = useState(0)

  useEffect(() => {
    console.log({count})
  },[count]);

  return(
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>{count}</Text>
      </View>

<View style={styles.botonContainer}>
    <TouchableOpacity
        activeOpacity={1}
        style={styles.boton}
        onPress={()=>setCount(prevState => prevState-1)}>
        <Text style={styles.text}>-</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
        activeOpacity={1}
        style={styles.boton}
        onPress={()=>setCount(prevState => prevState+1)}>
        <Text style={styles.text}>+</Text>
    </TouchableOpacity>
</View>
      
    </View>
  )

}


export {Project4}