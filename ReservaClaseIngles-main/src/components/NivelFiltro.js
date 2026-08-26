import react from "react";
import { Pressable, Text, StyleSheet} from "react-native";
import {spacing, colors, typography} from '../there';
export default function NivelFiltro ({etiqueta, activo, onPress}){
    return(
        <Pressable
            onPress={onPress}
            style={({pressed})}=>{
                style.chip,
                activo && style.chipActivo,
                pressed && {opacity: 0,7}
            }
        >
            <Text>{etiqueta}</Text>
        </Pressable>
    )
}
const style = StyleSheet.create({
  chip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    backgroundColor: colors.superficie,
    borderWidth: 1,
    borderColor: colors.borde,
    marginRight: spacing.sm,
  },
  chipActivo: {
    backgroundColor: colors.primario,
    borderColor: colors.primario,
  },
  texto: { fontSize: 13, fontWeight: '600', color: colors.textoSuave },
  textoActivo: { color: '#FFFFFF' },
});