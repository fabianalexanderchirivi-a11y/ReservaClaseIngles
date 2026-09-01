import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {spacing, colors} from '../theme'

export default function EtiquetaNivel({nivel}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{nivel}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: 3,
    backgroundColor: colors.fondo,
    borderRadius: 10,
    borderCurve: 'continuous',
  },
  texto: {
    color: colors.primario,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
})
