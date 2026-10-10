import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import { colors, spacing, radius, typography } from "../theme";
import { PERFIL_VACIO } from "../data/perfil";
import useReserva from "../hooks/useReserva";

export default function RegistrarScreen({ onGuardado, onCancelar, perfilInicial }) {
  const { guardarPerfil } = useReserva();
  const modoEdicion = !!perfilInicial;

  const [nombre, setNombre]= useState(perfilInicial?.nombre ?? PERFIL_VACIO.nombre);
  const [apellido, setApellido]= useState(perfilInicial?.apellido ?? PERFIL_VACIO.apellido);
  const [telefono, setTelefono]= useState(perfilInicial?.telefono ?? PERFIL_VACIO.telefono);
  const [email, setEmail]= useState(perfilInicial?.email ?? PERFIL_VACIO.email);
  const [foto, setFoto]= useState(perfilInicial?.foto ?? PERFIL_VACIO.foto);

  const confirmar = () => {
    if (nombre.trim() === "" || apellido.trim() === "") {
      Alert.alert("Datos incompletos", "El nombre y el apellido son obligatorios.");
      return;
    }

    guardarPerfil({ nombre, apellido, telefono, email, foto });
    onGuardado?.();
  };

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={{ padding: spacing.lg }}>
      <Text style={typography.titulo}>{modoEdicion ? "Editar perfil" : "Crear perfil"}</Text>

      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput
        style={[styles.input, modoEdicion && styles.inputBloqueado]}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Tu nombre"
        editable={!modoEdicion}
      />

      <Text style={styles.etiqueta}>Apellido</Text>
      <TextInput
        style={[styles.input, modoEdicion && styles.inputBloqueado]}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Tu apellido"
        editable={!modoEdicion}
      />

      <Text style={styles.etiqueta}>Teléfono</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Tu teléfono"
        keyboardType="phone-pad"
      />

      <Text style={styles.etiqueta}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="tu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.etiqueta}>Foto (URL, opcional)</Text>
      <TextInput
        style={[styles.input, modoEdicion && styles.inputBloqueado]}
        value={foto}
        onChangeText={setFoto}
        placeholder="https://... (opcional)"
        autoCapitalize="none"
        editable={!modoEdicion}
      />

      <Pressable style={styles.boton} onPress={confirmar}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </Pressable>

      {onCancelar && (
        <Pressable style={styles.botonCancelar} onPress={onCancelar}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  etiqueta: { fontSize: 13, fontWeight: "600", color: colors.textoSecundario, marginTop: spacing.md, marginBottom: spacing.xs },
  input: {
    backgroundColor: colors.superficie,
    borderWidth: 1,
    borderColor: colors.borde,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: 14,
    color: colors.texto,
  },
  inputBloqueado: {
    backgroundColor: colors.fondo,
    color: colors.textoSecundario,
  },
  boton: {
    backgroundColor: colors.primario,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.xl,
  },
  textoBoton: { color: colors.superficie, fontSize: 14, fontWeight: "700" },
  botonCancelar: {
    paddingVertical: spacing.md,
    alignItems: "center",
    marginTop: spacing.sm,
  },
  textoCancelar: { color: colors.textoSecundario, fontSize: 14, fontWeight: "600" },
});