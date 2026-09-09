import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../theme";

export default function EstadoVacio({icono= 'search-outline', titulo, mensaje, textoAccion, onAction }){
    return(
        <View style={StyleSheet.contenedor}> 
            <View style={StyleSheet.circulo}>
                <Ionicons name={icono} size={30} color= {colors.primario}/>

            </View>
            <text style={StyleSheet.titulo}>{titulo}</text>
            <text style={StyleSheet.mensaje}>{mensaje}</text>

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
});