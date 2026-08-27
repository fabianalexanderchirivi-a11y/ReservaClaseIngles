import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {spacing, colors, typography} from '../theme'

export default function EtiquetaNivel ({ nivel }) {
    return(
        <View>
           <Text> {nivel} </Text>
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    contenedor: {
        alingSelf: 'flex-start',
        paddingVertical: 3,
        paddingHorizontal: spacing.md
    },
    texto: {fontSize: 11, fontWeight: '700', letterSpacing: 0.3}
})