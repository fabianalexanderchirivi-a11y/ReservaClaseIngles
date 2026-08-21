import React from 'react'
import {Image, Pressable, StyleSheet} from 'react-native'

export default function Card({clase, onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.contenedor}>
      <Image source={{uri: clase.imagen}} style={styles.imagen} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagen: {
    height: 170,
    width: '100%',
  },
})