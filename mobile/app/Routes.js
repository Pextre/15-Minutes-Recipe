import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {TouchableOpacity,Image} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


import Main from "./Pages/Main";
import RecipeTutorial from "./Pages/RecipeTurorial";
import InfoPage from "./Pages/InfoPage";



const Routes = createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: ({ navigate, navigation }) => ({
                title:"15-minutes recipes",
                headerRight:()=> (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("InfoPage")}
                  >
                    <MaterialIcons name="info-outline" size={36} color="#000" />
                  </TouchableOpacity>
                )
              }),
        },
        RecipeTutorial:{
            screen: RecipeTutorial,
            navigationOptions:{
                title:"15-minutes recipes"
            }
        },
        InfoPage:{
            screen: InfoPage,
            navigationOptions:{
                title:"About"
            }
        },
        
    }, {

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#9CC02E",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTitleStyle:{
                fontSize:26
            }
        },
        
    });

    

export default createAppContainer(Routes);
