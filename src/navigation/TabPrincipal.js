import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import ClasesStack from './ClasesStack'
import ReservasScreen from '../screens/ReservasScreen'
import PerfilScreen from '../screens/PerfilScreen'
import { colors, spacing } from '../theme'

export default function TabPrincipal() {
  const [tabActiva, setTabActiva] = useState('inicio')
  const [homeKey, setHomeKey] = useState(0)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {tabActiva === 'inicio' && <ClasesStack key={homeKey} />}
        {tabActiva === 'reservas' && <ReservasScreen />}
        {tabActiva === 'perfil' && <PerfilScreen />}
      </View>

      <View style={styles.barra}>
        <Pressable
          style={styles.item}
          onPress={() => {
            setTabActiva('inicio')
            setHomeKey((k) => k + 1)
          }}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={tabActiva === 'inicio' ? colors.primario : colors.textoSecundario}
          />
          <Text style={[styles.texto, tabActiva === 'inicio' && styles.textoActivo]}>
            Inicio
          </Text>
        </Pressable>

        <Pressable style={styles.item} onPress={() => setTabActiva('reservas')}>
          <Ionicons
            name="list-outline"
            size={24}
            color={tabActiva === 'reservas' ? colors.primario : colors.textoSecundario}
          />
          <Text style={[styles.texto, tabActiva === 'reservas' && styles.textoActivo]}>
            Reservas
          </Text>
        </Pressable>

        <Pressable style={styles.item} onPress={() => setTabActiva('perfil')}>
          <Ionicons
            name="person-outline"
            size={24}
            color={tabActiva === 'perfil' ? colors.primario : colors.textoSecundario}
          />
          <Text style={[styles.texto, tabActiva === 'perfil' && styles.textoActivo]}>
            Perfil
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    backgroundColor: colors.superficie,
    paddingVertical: spacing.sm,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  texto: {
    fontSize: 11,
    color: colors.textoSecundario,
  },
  textoActivo: {
    color: colors.primario,
    fontWeight: '700',
  },

})  