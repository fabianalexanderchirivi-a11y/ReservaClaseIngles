import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import useReserva from "../hooks/useReserva";
import { tienePerfilCreado, fuenteFotoPerfil } from "../data/perfil";
import RegistrarScreen from "./RegistrarScreen";
import { colors, spacing, radius, typography } from "../theme";

export default function PerfilScreen() {
  const { perfil, sesionIniciada, iniciarSesion, cerrarSesion } = useReserva();
  const [modo, setModo] = useState("ver");

  if (modo === "registrar") {
    return <RegistrarScreen onGuardado={() => setModo("ver")} onCancelar={() => setModo("ver")} />;
  }

  if (modo === "editar") {
    return (
      <RegistrarScreen
        perfilInicial={perfil}
        onGuardado={() => setModo("ver")}
        onCancelar={() => setModo("ver")}
      />
    );
  }

  // Caso 1: nunca se ha creado un perfil
  if (!tienePerfilCreado(perfil)) {
    return (
      <View style={styles.pantallaVacia}>
        <Text style={typography.titulo}>Aún no tienes perfil</Text>
        <Text style={styles.subtitulo}>Regístrate para reservar tus clases</Text>
        <Pressable style={styles.boton} onPress={() => setModo("registrar")}>
          <Text style={styles.textoBoton}>Registrarme</Text>
        </Pressable>
      </View>
    );
  }

  // Caso 2: ya existe un perfil, pero la sesión está cerrada
  if (!sesionIniciada) {
    return (
      <View style={styles.pantallaVacia}>
        <Image source={fuenteFotoPerfil(perfil)} style={styles.avatarChico} />
        <Text style={typography.titulo}>Hola de nuevo, {perfil.nombre}</Text>
        <Text style={styles.subtitulo}>Tu sesión está cerrada</Text>
        <Pressable style={styles.boton} onPress={iniciarSesion}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </Pressable>
      </View>
    );
  }

  // Caso 3: sesión iniciada, mostrar perfil completo
  return (
    <View style={styles.pantalla}>
      <View style={styles.tarjeta}>
        <Image source={fuenteFotoPerfil(perfil)} style={styles.avatar} />
        <Text style={styles.nombre}>{perfil.nombre} {perfil.apellido}</Text>

        <View style={styles.filaDato}>
          <Text style={styles.etiquetaDato}>Teléfono</Text>
          <Text style={styles.valorDato}>{perfil.telefono || "No registrado"}</Text>
        </View>

        <View style={styles.filaDato}>
          <Text style={styles.etiquetaDato}>Email</Text>
          <Text style={styles.valorDato}>{perfil.email || "No registrado"}</Text>
        </View>

        <Pressable style={styles.botonEditar} onPress={() => setModo("editar")}>
          <Text style={styles.textoBotonEditar}>Editar teléfono / email</Text>
        </Pressable>

        <Pressable style={styles.botonCerrarSesion} onPress={cerrarSesion}>
          <Text style={styles.textoCerrarSesion}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo, padding: spacing.lg, justifyContent: "center" },
  pantallaVacia: { flex: 1, backgroundColor: colors.fondo, alignItems: "center", justifyContent: "center", padding: spacing.lg },
  subtitulo: { fontSize: 13, color: colors.textoSecundario, marginTop: spacing.xs, textAlign: "center" },
  avatarChico: { width: 60, height: 60, borderRadius: 30, marginBottom: spacing.md, backgroundColor: colors.borde },
  tarjeta: {
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: spacing.md, backgroundColor: colors.borde },
  nombre: { fontSize: 18, fontWeight: "800", color: colors.texto, marginBottom: spacing.lg },
  filaDato: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
  },
  etiquetaDato: { fontSize: 13, color: colors.textoSecundario, fontWeight: "600" },
  valorDato: { fontSize: 13, color: colors.texto },
  boton: {
    backgroundColor: colors.primario,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
    marginTop: spacing.lg,
  },
  textoBoton: { color: colors.superficie, fontSize: 14, fontWeight: "700" },
  botonEditar: {
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.primario,
  },
  textoBotonEditar: { color: colors.primario, fontSize: 13, fontWeight: "700" },
  botonCerrarSesion: {
    marginTop: spacing.sm,
    paddingVertical: spacing.sm,
  },
  textoCerrarSesion: { color: colors.textoSecundario, fontSize: 13, fontWeight: "600" },
});