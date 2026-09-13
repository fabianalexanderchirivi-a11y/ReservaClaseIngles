import React from 'react'
import {Image, Pressable, StyleSheet, Text, View} from 'react-native'

import {colors, spacing} from '../theme'
import EtiquetaNivel from './EtiquetaNivel'

export default function Card({clase, onReservar}) {
  const primerHorario = clase.horarios?.[0] ?? 'Horario por confirmar'

  return (
    <View style={styles.tarjeta}>
      <Image
        source={{uri: clase.profesor.foto}}
        accessibilityLabel={`Foto de ${clase.profesor.nombre}`}
        style={styles.fotoProfesor}
      />

      <View style={styles.contenido}>
        <EtiquetaNivel nivel={clase.nivel} />
        <Text style={styles.titulo}>{clase.titulo}</Text>
        <Text style={styles.profesor}>{clase.profesor.nombre}</Text>
        <Text style={styles.descripcion} numberOfLines={2}>
          {clase.descripcion}
        </Text>
        <Text style={styles.horario}>{primerHorario}</Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Reservar ${clase.titulo} con ${clase.profesor.nombre}`}
          onPress={() => onReservar?.(clase)}
          style={({pressed}) => [
            styles.botonReservar,
            pressed && styles.botonPresionado,
          ]}>
          <Text style={styles.textoBoton}>Reservar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tarjeta: {
    width: 320,
    minHeight: 230,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.superficie,
    borderColor: colors.borde,
    borderWidth: 1,
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  fotoProfesor: {
    width: 92,
    height: 120,
    borderRadius: 16,
    borderCurve: 'continuous',
    backgroundColor: colors.fondo,
  },
  contenido: {
    flex: 1,
    alignItems: 'flex-start',
    gap: spacing.xs,
  },
  titulo: {
    color: colors.texto,
    fontSize: 16,
    fontWeight: '700',
  },
  profesor: {
    color: colors.texto,
    fontSize: 14,
    fontWeight: '600',
  },
  descripcion: {
    color: colors.textoSecundario,
    fontSize: 13,
    lineHeight: 18,
  },
  horario: {
    color: colors.texto,
    fontSize: 13,
    fontWeight: '600',
  },
  botonReservar: {
    alignSelf: 'flex-end',
    marginTop: spacing.xs,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primario,
    borderRadius: 10,
    borderCurve: 'continuous',
  },
  botonPresionado: {
    opacity: 0.75,
  },
  textoBoton: {
    color: colors.superficie,
    fontSize: 14,
    fontWeight: '700',
  },
})
