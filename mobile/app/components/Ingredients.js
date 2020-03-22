import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

export default function Ingredients({ ingredients }) {
    
    return (
        <View style={styles.ingredients}>
                <TextInput style={styles.ingredientsTitle} editable={false}>Ingredientes:</TextInput>
                {ingredients.map((ingredient, index)=>(
                    <TextInput key = {index} style={styles.ingredientsItem}>{ingredient}</TextInput>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    ingredients:{
        backgroundColor: "#91A840",
        borderColor: "#000",
        borderWidth:2,
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
        borderColor:"#E1FF00",
        borderBottomWidth:1.5,
    },
    ingredientsItem:{
        color:"#E1FF00",
        fontSize:18,
        fontWeight:"bold",
        padding:5,
        paddingLeft:10,
        borderColor:"#E1FF00",
        borderTopWidth:0.5,
    },

});
