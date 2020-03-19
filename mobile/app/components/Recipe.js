import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function Recipe({ recipe, navigation }) {
    
    return (
        <View key={recipe.key} style={styles.recipe}>
            <Text style={styles.recipeTextName}>{recipe.name}</Text>
            <Text style={styles.recipeTextDate}>{recipe.date}</Text>
            <TouchableOpacity style={styles.navigationButton} onPress={()=>navigation.navigate("RecipeTutorial",{
                currentRecipe:recipe
                })} >
                <MaterialIcons name="chevron-right" size={46} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    recipe: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        backgroundColor: "#FFCE6F",
        borderRadius: 7,
        borderColor: "#000",
        borderWidth: 0.5,
        marginBottom: 5,
        marginTop: 5,

    },
    recipeTextName: {
        color: "#2A3C58",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        marginBottom: 2,
    },
    recipeTextDate: {
        color: "#FFF",
        fontSize: 12,
        paddingLeft: 20,
    },
    navigationButton: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        top: 7,
        bottom: 10,
        right: 0,
    },

});
