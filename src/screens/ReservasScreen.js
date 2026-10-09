import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Alert } from "react-native";
import useReserva from "../hooks/useReserva";
import { colors, spacing, radius, typography } from "../theme";

export default function ReservasScreen() {
  const { reservas, cancelarReserva, cancelarTodas, sesionIniciada } = useReserva();

  if (!sesionIniciada) {
    return (
      <View style={styles.pantallaVacia}>
        <Text style={typography.titulo}>Sesión cerrada</Text>
        <Text style={styles.sinReservas}>
          Inicia sesión en la pestaña Perfil para ver tus reservas
        </Text>
      </View>
    );
  }

  const confirmarCancelacion = (reserva) => {
    Alert.alert(
      "Cancelar reserva",
      `¿Seguro que quieres cancelar "${reserva.claseTitulo}" (${reserva.horario})?`,
      [
        { text: "No", style: "cancel" },
        {
          text: "Sí, cancelar",
          style: "destructive",
          onPress: () => {
            cancelarReserva(reserva.id);
          },
        },
      ]
    );
  };

  const confirmarCancelarTodas = () => {
    Alert.alert(
      "Cancelar todas",
      "¿Seguro que quieres cancelar todas tus reservas?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Sí, cancelar todas",
          style: "destructive",
          onPress: () => {
            cancelarTodas();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.pantalla}>
      <Text style={[typography.titulo, { padding: spacing.lg }]}>Mis reservas</Text>

      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: spacing.lg, paddingTop: 0 }}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={{ flex: 1 }}>
              <Text style={styles.claseTitulo}>{item.claseTitulo}</Text>
              <Text style={styles.horario}>{item.horario}</Text>
            </View>
            <Pressable style={styles.botonCancelar} onPress={() => confirmarCancelacion(item)}>
              <Text style={styles.textoBotonCancelar}>Cancelar</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.sinReservas}>Todavía no tienes reservas</Text>
        }
      />

      {reservas.length > 0 && (
        <View style={styles.pie}>
          <Pressable style={styles.botonCancelarTodas} onPress={confirmarCancelarTodas}>
            <Text style={styles.textoCancelarTodas}>Cancelar todas las reservas</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  pantallaVacia: {
    flex: 1,
    backgroundColor: colors.fondo,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
  },
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  claseTitulo: { fontSize: 15, fontWeight: "700", color: colors.texto },
  horario: { fontSize: 13, color: colors.textoSecundario, marginTop: 2 },
  botonCancelar: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.primario,
  },
  textoBotonCancelar: { color: colors.primario, fontSize: 13, fontWeight: "700" },
  sinReservas: {
    textAlign: "center",
    color: colors.textoSecundario,
    marginTop: spacing.sm,
  },
  pie: {
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    backgroundColor: colors.superficie,
  },
  botonCancelarTodas: {
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.primario,
    alignItems: "center",
  },
  textoCancelarTodas: { color: colors.primario, fontSize: 14, fontWeight: "700" },
});