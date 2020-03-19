import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Ingredients from "../components/Ingredients";
import Directions from "../components/Directions";


export default function RecipeTutorial({ navigation }) {

    const currentRecipe = navigation.getParam("currentRecipe");
    const ingredientsArray = currentRecipe.ingredients;
    const directionsArray = currentRecipe.directions;

    return (<View style={styles.container}>
        <ScrollView>
            <Ingredients ingredients={ingredientsArray}/>
            <Directions directions={directionsArray}/>
        </ScrollView>


    </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE3C9",
    },
});
