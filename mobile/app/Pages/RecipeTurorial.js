import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Ingredients from "../components/Ingredients";
import Directions from "../components/Directions";
import RecipeInfo from "../components/RecipeInfo";


export default function RecipeTutorial({ navigation }) {

    const currentRecipe = navigation.getParam("currentRecipe");
    const ingredientsArray = currentRecipe.ingredients;
    const directionsArray = currentRecipe.directions;
    const recipeInfo = {
        receipeImageURL:currentRecipe.recipesImageUrl,
        youtubeVideoURL:currentRecipe.urlYouTube,
        recipeName:currentRecipe.name,
    };

    return (<View style={styles.container}>
        <ScrollView>
            <RecipeInfo recipeInfo={recipeInfo} />
            <Ingredients ingredients={ingredientsArray}/>
            <Directions directions={directionsArray}/>
        </ScrollView>


    </View>);
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#EEEEEE",
    },
    
});
