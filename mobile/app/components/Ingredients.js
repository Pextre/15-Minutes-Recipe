import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function Ingredients({ ingredients }) {
    
    return (
        <View style={styles.ingredients}>
                <TextInput style={styles.ingredientsTitle} editable={false}>Ingredientes:</TextInput>
                {ingredients.map((ingredient, index)=>(
                    <Text key = {index} style={styles.ingredientsItem}>{ingredient}</Text>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    ingredients:{
        backgroundColor: "#FFCE6F",
        borderColor:"#670D0F",
        borderWidth:1,
        borderRadius:5,
        margin:5,
        marginTop:25,
        padding:0,
    },
    ingredientsTitle:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:36,
        paddingLeft:10,
        borderColor:"#670D0F",
        borderBottomWidth:1.5,
    },
    ingredientsItem:{
        color:"#2A3C58",
        fontSize:18,
        fontWeight:"bold",
        padding:5,
        paddingLeft:10,
        borderColor:"#670D0F",
        borderWidth:0.5,
    },

});
