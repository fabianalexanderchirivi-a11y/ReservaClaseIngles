import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import { colors, spacing, radius, typography } from "../theme";
import { PERFIL_VACIO } from "../data/perfil";
import useReserva from "../hooks/useReserva";

export default function RegistrarScreen({ onGuardado }) {
  const { guardarPerfil } = useReserva();

  const [nombre, setNombre] = useState(PERFIL_VACIO.nombre);
  const [apellido, setApellido] = useState(PERFIL_VACIO.apellido);
  const [telefono, setTelefono] = useState(PERFIL_VACIO.telefono);
  const [email, setEmail] = useState(PERFIL_VACIO.email);
  const [foto, setFoto] = useState(PERFIL_VACIO.foto);

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
      <Text style={typography.titulo}>Crear perfil</Text>

      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Tu nombre" />

      <Text style={styles.etiqueta}>Apellido</Text>
      <TextInput style={styles.input} value={apellido} onChangeText={setApellido} placeholder="Tu apellido" />

      <Text style={styles.etiqueta}>Teléfono</Text>
      <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} placeholder="Tu teléfono" keyboardType="phone-pad" />

      <Text style={styles.etiqueta}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="tu@email.com" keyboardType="email-address" autoCapitalize="none" />

      <Text style={styles.etiqueta}>Foto (URL)</Text>
      <TextInput style={styles.input} value={foto} onChangeText={setFoto} placeholder="https://..." autoCapitalize="none" />

      <Pressable style={styles.boton} onPress={confirmar}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </Pressable>
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
  boton: {
    backgroundColor: colors.primario,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.xl,
  },
  textoBoton: { color: colors.superficie, fontSize: 14, fontWeight: "700" },
});