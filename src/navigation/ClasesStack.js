import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ClassesScreen from '../screens/ClassesScreen'

const Stack = createNativeStackNavigator()

export default function ClasesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ClassesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
