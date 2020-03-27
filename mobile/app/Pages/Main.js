import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, TextInput, Text, FlatList } from 'react-native';
import Recipe from "../components/Recipe";
import api from '../services/api';

export default function Main({ navigation }) {
    const STATUS_SUCESS = 200
    const [recipes, setRecipes] = useState([]);
    const [newRecipes, setNewRecipes] = useState([]);
    const [recipeText, setRecipeText] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const [pageCounter, setPageCounter] = useState(1);

    /*
    */

    async function loadRecipes() {
        if (isFetching) {
            return ;
        }
    }

    useEffect(() => {
        async function loadFirstRecipes() {

            const response = await api.get('/recipes', { params: { page: pageCounter } });
            const responseRecipes = response.data.docs;
            if (response.status === STATUS_SUCESS) {
                setRecipes(responseRecipes);
                setIsFetching(false);
                setPageCounter(2);
            }
        }
        loadFirstRecipes();
    }, []);

    useEffect(() => {
        async function loadMoreRecipes() {
            if(isFetching){
                const response = await api.get('/recipes', { params: { page: pageCounter } });
                const responseRecipes = response.data.docs;
                if (response.status === STATUS_SUCESS && recipes.length) {
                    setNewRecipes(responseRecipes);
                    setIsFetching(false);
                    setPageCounter(1+pageCounter)
                }
            }
        }
        loadMoreRecipes();
    }, [isFetching]);

    useEffect(() => {
        if(newRecipes.length){
            setRecipes([...recipes,...newRecipes]);
        } 
    }, [newRecipes]);

    function Item({ recipe }) {
        return (<Recipe key={recipe._id} recipe={recipe} navigation={navigation} />);
    }

    function NoItems() {
        return (<Text style={styles.noRecipe}>Não existe nenhuma receita ainda...</Text>);
    }

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
            {/* <ScrollView style={styles.scrollContainer}>
                {recipes.length === 0 ?
                    <Text style={styles.noRecipe}>Não existe nenhuma receita ainda...</Text>
                    :
                    recipes.map((recipe) => (

                        <Recipe key={recipe._id} recipe={recipe} navigation={navigation} />

                    ))
                }
            </ScrollView> */}
            <FlatList style={styles.scrollContainer}
                data={recipes}
                ListEmptyComponent={() => <NoItems />}
                renderItem={({ item }) => <Item recipe={item} />}
                keyExtractor={item => item._id}
                onEndReached={() => {
                    if (!isFetching) {
                        setIsFetching(true)
                    }
                }}
                onEndReachedThreshold={0.9}
            />
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
