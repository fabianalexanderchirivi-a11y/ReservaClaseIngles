import react from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ClasesScreen from "../screens/ClasesScreen";
import {color} from '../theme'
const Stack =createNativeStackNavigator
export default function ClasesStack{
    return(
        <Stack.Navigation>
            <Stack.screens
                name="home"
                component={ClasesScreen}
                options={{header: false}}


            />

            <Stack.screen

            />


        </Stack.Navigation>    
    )
}