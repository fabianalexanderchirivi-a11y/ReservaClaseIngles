import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import useReserva from "../hooks/useReserva";
import { tienePerfilCreado, fuenteFotoPerfil } from "../data/perfil";
import RegistrarScreen from "./RegistrarScreen";
import { colors, spacing, radius, typography } from "../theme";

export default function PerfilScreen() {
  const { perfil } = useReserva();
  const [modo, setModo] = useState("ver");

  if (modo === "registrar") {
    return <RegistrarScreen onGuardado={() => setModo("ver")} />;
  }

  if (!tienePerfilCreado(perfil)) {
    return (
      <View style={styles.pantalla}>
        <Text style={typography.titulo}>Aún no tienes perfil</Text>
        <Pressable style={styles.boton} onPress={() => setModo("registrar")}>
          <Text style={styles.textoBoton}>Registrarme</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.pantalla}>
      <Image source={fuenteFotoPerfil(perfil)} style={styles.avatar} />
      <Text style={styles.nombre}>{perfil.nombre} {perfil.apellido}</Text>
      <Text style={styles.dato}>{perfil.telefono}</Text>
      <Text style={styles.dato}>{perfil.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo, alignItems: "center", justifyContent: "center", padding: spacing.lg },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: spacing.md, backgroundColor: colors.borde },
  nombre: { fontSize: 18, fontWeight: "800", color: colors.texto },
  dato: { fontSize: 14, color: colors.textoSecundario, marginTop: spacing.xs },
  boton: {
    backgroundColor: colors.primario,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
    marginTop: spacing.lg,
  },
  textoBoton: { color: colors.superficie, fontSize: 14, fontWeight: "700" },
});