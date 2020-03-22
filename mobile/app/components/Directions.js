import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

export default function Directions({ directions }) {
    
    return (
        <View style={styles.directions}>
                <TextInput style={styles.directionsTitle}>Modo de preparo:</TextInput>
                {directions.map((direction,index)=>(
                    <TextInput key={index} style={styles.directionsItem}>{direction}</TextInput>
                ))}
            </View>
    );
}

const styles = StyleSheet.create({
    directions:{
        backgroundColor: "#91A840",
        borderColor: "#000",
        borderWidth:2,
        borderRadius:5,
        margin:5,
        marginTop:25,
        padding:0,
    },
    directionsTitle:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:36,
        paddingLeft:10,
        borderColor:"#E1FF00",
        borderBottomWidth:2,
    },
    directionsItem:{
        color:"#E1FF00",
        fontSize:18,
        fontWeight:"bold",
        padding:5,
        paddingLeft:10,
        borderColor:"#E1FF00",
        borderTopWidth:0.5,
    },
});
