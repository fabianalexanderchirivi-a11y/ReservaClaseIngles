import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography } from "../theme";

export default function PerfilScreen() {
  return (
    <View style={styles.pantalla}>
      <Text style={typography.titulo}>Mi perfil</Text>
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
});