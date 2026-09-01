import React from "react"
import {Image, Pressable, StyleSheet, Text, View} from "react-native"

import {colors} from '../theme'
import EtiquetaNivel from './EtiquetaNivel'

export default function Card({clase, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Image source={{uri: clase.imagen}} />
      <View>
        <EtiquetaNivel nivel={clase.nivel} />
        <Text style={styles.titulo}>{clase.titulo}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  titulo: {
    color: colors.texto,
    fontSize: 16,
  },
})