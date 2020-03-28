import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, FlatList } from 'react-native';
import Recipe from "../components/Recipe";
import api from '../services/api';

export default function Main({ navigation }) {
    const STATUS_SUCESS = 200
    const [recipes, setRecipes] = useState([]);
    const [recipeText, setRecipeText] = useState("");
    const [recipesInfo, setRecipesInfo] = useState({ page: "1", pages: 0 });

    useEffect(() => {
        async function loadRecipes(pageNumber = 1) {

            const response = await api.get('/recipes', { params: { page: pageNumber } });
            const { status, data } = response;
            const { docs, page, pages } = data;
            if (status === STATUS_SUCESS) {
                setRecipes([...recipes, ...docs]);
                setRecipesInfo({ page, pages });
            }
        }
        loadRecipes();
    }, []);


    function loadMoreRecipes() {
        const { page, pages } = recipesInfo;
        if (Number(page) === pages)
            return
        loadRecipes(Number(page) + 1);
    }

    function renderItem({ item }) {
        return <Item recipe={item} />;
    }

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
                onChangeText={setRecipeText}
                placeholder="Pesquise sua receita aqui..."
                placeholderTextColor="#000"
                autoCorrect={true}
                ref={input => { textInput = input }}
            >
            </TextInput>
            <FlatList
                style={styles.scrollContainer}
                data={recipes}
                keyExtractor={item => item._id}
                renderItem={renderItem}
                ListEmptyComponent={() => <NoItems />}
                onEndReached={loadMoreRecipes}
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
