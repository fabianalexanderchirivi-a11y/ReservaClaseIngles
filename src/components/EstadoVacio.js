import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../theme";

export default function EstadoVacio({ icono = 'search-outline', titulo, mensaje, textoAccion, onAction }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.circulo}>
        <Ionicons name={icono} size={30} color={colors.primario} />
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      {textoAccion && (
        <Pressable style={styles.boton} onPress={onAction}>
          <Text style={styles.textoBoton}>{textoAccion}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  circulo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.fondo,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.texto,
    textAlign: 'center',
  },
  mensaje: {
    fontSize: 13,
    color: colors.textoSecundario,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  boton: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primario,
    borderRadius: 10,
  },
  textoBoton: {
    color: colors.superficie,
    fontSize: 14,
    fontWeight: '700',
  },
});