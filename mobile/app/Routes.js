import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from "./Pages/Main";
import RecipeTutorial from "./Pages/RecipeTurorial";
const Routes = createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: "15-minutes recipes"
            }
        },
        RecipeTutorial:{
            screen: RecipeTutorial,
            navigationOptions:{
                title:"15-minutes recipes"
            }
        }
        /* Profile:{
            screen:Profile,
            navigationOptions:{
                title:"Perfil no Github"
            }
        }, */
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#FF7C44",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
        }
    });

export default createAppContainer(Routes);
