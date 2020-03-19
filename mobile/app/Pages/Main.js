import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Recipe from "../components/Recipe";

export default function Main({navigation}) {

    const [recipes , setRecipes] = useState([]);
    const [recipeText , setRecipeText] = useState("");
    const [counter , setCounter] = useState(0);


    function createDateString(){
        let todaysDate = new Date();
        return `date: ${todaysDate.getDay()}/${todaysDate.getMonth()}/${todaysDate.getFullYear()}`
    }

    function addRecipe(){
        /* if(recipeText.trim()!==""){
            setCounter(counter+1);
            let recipe = {
                name:recipeText,
                key: counter,
                date: createDateString(),
            }
            setRecipes([...recipes, recipe]);
            setRecipeText("");
            textInput.clear()
        } */
        let recipe = []
        for(let i = 0; i < 5 ; i++){
            recipe.push({
                name:`Receita ${i}`,
                key: i,
                date: createDateString(),
                ingredients:["rice","bean","penaut"],
                directions:["rice","bean","penaut"]
            });
        }
        setRecipes([...recipes, ...recipe]);
    }


    return (
        <View style={styles.container} >
            <TextInput
                    style={styles.headerInput}
                    onChangeText= {text=>setRecipeText(text)}
                    placeholder="Digite aqui Nova Receita..."
                    placeholderTextColor="#000"
                    autoCorrect={false}
                    ref={input => {textInput = input }}
                >
                </TextInput>
            <ScrollView style={styles.scrollContainer}>
                {recipes.map((recipe)=>(
                
                    <Recipe key={recipe.key}  recipe={recipe} navigation={navigation}>

                    </Recipe>
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity onPress={addRecipe} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFE3C9"
    },
    headerInput:
    {   
        fontSize:16,
        alignSelf: "stretch",
        color: "#000",
        padding: 20,
        marginTop:0,
        backgroundColor: "#FFF",
        elevation: 2,
        borderTopColor:"#000",
        borderTopWidth:1,
        borderBottomWidth: 5,
        borderBottomColor: "#ddd"
    },
    scrollcontainer:
    {
        flex: 1,
        marginBottom: 100,
    },
    footer:
    {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    addButton:
    {
        position: "absolute"
        , zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: "#E91E63",
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
    },
    addButtonText:
    {
        textAlign:"center",
        color: "#fff",
        fontSize: 24,
    }
});
