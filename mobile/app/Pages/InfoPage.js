import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';


export default function InfoPage({ navigation }) {

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logo}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras a congue elit, a ultrices ligula. Quisque hendrerit orci in laoreet eleifend. Nulla sodales arcu a turpis posuere porta. 
                    Nulla euismod ac ante at aliquam. Integer efficitur at mi et vestibulum. Quisque placerat quam in massa consectetur congue. 
                    Fusce erat lorem, dignissim vitae felis eget, lobortis sollicitudin lectus. 
                    Phasellus vulputate tincidunt turpis, at faucibus sem.</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 60,
    },
    textContainer:{
        maxWidth:300,
        backgroundColor: "#91A840",
        borderRadius:10,
        marginTop: 25,
        padding: 5,
    },
    text:{
        padding:10,
        textAlign:"justify",
        color:"#E1FF00"
    }
})
