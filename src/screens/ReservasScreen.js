import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography } from "../theme";

export default function ReservaScreen({ navigation }) {
  return (
    <View style={styles.pantalla}>
      <Text style={typography.titulo}>Mis reservas</Text>
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