import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography, spacing } from "../theme";

export default function ReservaScreen({ route, navigation }) {
  const { clase, horario } = route.params;

  return (
    <View style={styles.pantalla}>
      <Text style={typography.titulo}>{clase.titulo}</Text>
      <Text style={styles.horario}>{horario}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.fondo,
    alignItems: "center",
    justifyContent: "center",
  },
  horario: {
    fontSize: 15,
    color: colors.textoSecundario,
    marginTop: spacing.sm,
  },
});