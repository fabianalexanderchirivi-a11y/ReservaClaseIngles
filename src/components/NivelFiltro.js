import React from 'react'
import {Pressable, Text, StyleSheet} from 'react-native'

import {colors, spacing} from '../theme'

export default function NivelFiltro({etiqueta, activo, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.chip,
        activo && styles.chipActivo,
        pressed && styles.presionado,
      ]}>
      <Text style={[styles.texto, activo && styles.textoActivo]}>
        {etiqueta}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 999,
    backgroundColor: colors.superficie,
    borderWidth: 1,
    borderColor: colors.borde,
    marginRight: spacing.sm,
  },
  chipActivo: {
    backgroundColor: colors.primario,
    borderColor: colors.primario,
  },
  presionado: {
    opacity: 0.7,
  },
  texto: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textoSecundario,
  },
  textoActivo: {
    color: '#FFFFFF',
  },
})
