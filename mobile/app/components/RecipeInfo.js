import React from "react";
import { StyleSheet, Text,TouchableOpacity, View, Image, Linking } from 'react-native';

export default function RecipeInfo({ recipeInfo }) {
    //const imageURL = recipeInfo.receipeImageURL;
    //const youtubeVideoURL = recipeInfo.youtubeVideoURL;
    const imageURL = "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3270520/580/387/m1/fpnw/wm0/frenchfriescoversmaller-.jpg?1505771991&s=f1d914c445646c94b374cbc39ac80ab6";
    const youtubeVideoURL = "https://www.youtube.com/watch?v=-L7o6HtX8Vg";
    const recipeName = recipeInfo.recipeName;

    return (
        <View style={styles.info}>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <TouchableOpacity onPress={() => { Linking.openURL(youtubeVideoURL) }} style={styles.button} >
               <Text style={styles.textName}> {recipeName} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    info: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        maxWidth:300,
        backgroundColor: "#91A840",
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 5,
        marginLeft:40,
        marginTop: 25,
        padding: 5,
    },
    image:{
        width:160,
        height:150,
        margin:10,
        marginBottom:0,
        borderRadius:25,
        borderColor:"#D7F204",
        borderWidth:1
    },
    button:{
        margin:0,
        padding:0
    },
    textName: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 30,
        paddingLeft: 10,
        borderColor: "#670D0F",
        borderBottomWidth: 2,
        marginLeft:-15,
        textAlign:"center"
    },
});
