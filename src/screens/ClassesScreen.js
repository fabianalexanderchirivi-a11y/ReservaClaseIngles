import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'

import useResponsive from '../hooks/useResponsive'
import Card from '../components/Card'
import NivelFiltro from '../components/NivelFiltro'
import { spacing, colors, typography, radius } from '../theme'
import { CLASES, NIVELES } from '../data/clases'

export default function ClassesScreen({ navigation }) {
  const insets = useSafeAreaInsets()
  const [nivel, setNivel] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  
  return (
    <View style={[style.pantalla, { paddingTop: insets.top + spacing.md }]}>
      <View> style={{paddingHorizontal}}
        <Text style={typography.titulo}>Aplicacion de clases de ingles</Text>

        <View style={style.buscador}>
          <Ionicons name="search" size={18} />
          <TextInput
            style={style.input}
            placeholder="Buscar por nivel o profesor"
            value={busqueda}
            onChangeText={setBusqueda}
            autoCorrect={false}
            autoComplete="off"
          />

          {busqueda.length > 0 && (
            <Ionicons
              name="close-circle"
              size={18}
              onPress={() => setBusqueda('')}
            />
          )}
        </View>

        <ScrollView horizontal style={{ flexGrow: 0 }}>
          {NIVELES.map((item) => (
            <NivelFiltro
              key={item}
              etiqueta={item}
              activo={nivel === item}
              onPress={() => setNivel(item)}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={clasesFiltradas}
        keyExtractor={(item) => item.id?.toString() ?? item.profesor}
        renderItem={({ item }) => <Card clase={item} />}
        contentContainerStyle={{ padding: spacing.md }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.superficie,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borde,
  },
  input: { flex: 1, fontSize: 14, color: colors.texto, paddingVertical: 0 },
})