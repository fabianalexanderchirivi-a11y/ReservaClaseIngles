import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Alert } from "react-native";
import useReserva from "../hooks/useReserva";
import { CLASES } from "../data/clases";
import { colors, spacing, radius, typography } from "../theme";

export default function ReservasScreen() {
  const { reservas, cancelarReserva } = useReserva();

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
            const clase = CLASES.find((c) => c.id === reserva.claseId);
            if (clase) {
              clase.cupos = clase.cupos + 1;
            }
            cancelarReserva(reserva.id);
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
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
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
    marginTop: spacing.xl,
  },
});