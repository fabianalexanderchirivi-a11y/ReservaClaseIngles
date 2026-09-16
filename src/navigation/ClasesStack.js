import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetalleClaseScreen from "../screens/DetalleClaseScreen"
import ClassesScreen from '../screens/ClassesScreen'
import ReservaScreen from '../screens/ReservaScreen'

const Stack = createNativeStackNavigator()

export default function ClasesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ClassesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetalleCLase"
        component={DetalleClaseScreen}
        options={{ title: 'Detalle', headerBackTitle: 'Atras' }}
      />
      <Stack.Screen
        name="Reserva"
        component={ReservaScreen}
        options={{ title: 'Reserva', headerBackTitle: 'Atras' }}
      />
    </Stack.Navigator>
  )
}