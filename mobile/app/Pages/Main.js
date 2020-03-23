import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import Recipe from "../components/Recipe";
import api from '../services/api';

export default function Main({ navigation }) {
    const STATUS_SUCESS = 200
    const [recipes, setRecipes] = useState([]);
    const [recipeText, setRecipeText] = useState("");
    const [counter, setCounter] = useState(0);

/*
*/

    useEffect(() => {

        async function loadRecipes() {

                const response = await api.get('/recipes');

                if (response.status === STATUS_SUCESS) {
                    const recipes = response.data;
                    setRecipes(recipes);
                }
                else {
                    setRecipes([]);
                }

            
        }

        loadRecipes();
    }, []);

    return (
        <View style={styles.container} >
            <TextInput
                style={styles.headerInput}
                onChangeText={text => setRecipeText(text)}
                placeholder="Pesquise sua receita aqui..."
                placeholderTextColor="#000"
                autoCorrect={false}
                ref={input => { textInput = input }}
            >
            </TextInput>
            <ScrollView style={styles.scrollContainer}>
                {recipes.length === 0 ?
                    <Text style={styles.noRecipe}>Não existe nenhuma receita ainda...</Text>
                    :
                    recipes.map((recipe) => (

                        <Recipe key={recipe._id} recipe={recipe} navigation={navigation} />

                    ))
                }
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEE"
    },
    headerInput:
    {
        fontSize: 16,
        alignSelf: "stretch",
        color: "#000",
        padding: 20,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: "#FFF",
        elevation: 2,
        borderBottomWidth: 5,
        borderBottomColor: "#ddd"
    },
    scrollcontainer:
    {
        flex: 1,
    },
    footer:
    {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    noRecipe: {
        position: "absolute",
        top: 20,
        left: 40,
        right: 0,
        fontSize: 20
    },
    
});
