import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function Ingredients({ directions }) {
    
    return (
        <View style={styles.directions}>
                <TextInput style={styles.directionsTitle}>Modo de preparo:</TextInput>
                {directions.map((direction,index)=>(
                    <Text key={index} style={styles.directionsItem}>{direction}</Text>
                ))}
            </View>
    );
}

const styles = StyleSheet.create({
    directions:{
        backgroundColor: "#FFCE6F",
        borderColor:"#670D0F",
        borderWidth:1,
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
        borderColor:"#670D0F",
        borderBottomWidth:2,
    },
    directionsItem:{
        color:"#2A3C58",
        fontSize:18,
        fontWeight:"bold",
        padding:5,
        paddingLeft:10,
        borderColor:"#670D0F",
        borderWidth:0.5,
    },
});
