import React, {useState} from 'react'
import {View, Text, TextInput, FlatList, ScrollView, StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons'
import NivelFiltro from '../components/NivelFiltro'
import Card from '../components/Card'
import {spacing, colors, typography} from '../theme'
import {CLASES, NIVELES} from '../data/clases'

export default function ClasesScreen({navigation}) {
  // const {columnas, paddingHorizontal} = useResponsive()
  const [nivel, setNivel] = useState('Todos')
  const {busqueda, setBusqueda}= useState[]

  return (
    <View>
      <View>
        <Text>Aplicacion de clases de ingles</Text>
        <View>
          <Ionicons name="search" size={18} />
          <TextInput
            placeholder="Buscar por nivel o profesor"
            value={busqueda}
            onChangeText={setBusqueda}
            autoCorrect={false}
            autoComplete={false}
          />

          {busqueda.lenght > 0 &&(
            <Ionicons
            nave="close-circle"
            size={18}
            onPress={() => setBusqueda()}
            />

          )}
        </View>
        <ScrollView
            style={{flexGrow: 0}}

        >
        </ScrollView>
        {
          NIVELES.map({item}=>{
            <NivelFiltro
              etiqueta={item}
              activo={ nivel == item}
              onPress={ ()=> setNivel(item)}
                  

            />

          })
        }
      </View>
    </View>
  )
}