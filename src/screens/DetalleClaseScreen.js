import React, { useState, useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image, Pressable, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import useResponsive from "../hooks/useResponsive";
import useReserva from "../hooks/useReserva";
import { colors, spacing, typography, radius } from "../theme";
import { formatearPrecio, cuposDisponibles } from "../data/clases";

export default function DetalleClaseScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { clase } = route.params;
  const { isTable } = useResponsive();
  const { sesionIniciada, reservas, horarioOcupado, agregarReserva } = useReserva();
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(
    clase.horarios?.[0] ?? null
  );

  const disponibles = cuposDisponibles(clase, reservas);

  useLayoutEffect(() => {
    navigation.setOptions({ title: clase.titulo });
  }, [navigation, clase.titulo]);

  const confirmarReserva = () => {
    if (!sesionIniciada) {
      Alert.alert(
        "Inicia sesión primero",
        "Debes iniciar sesión o registrarte en la pestaña Perfil antes de reservar."
      );
      return;
    }

    if (disponibles <= 0) {
      Alert.alert("Sin cupos", "Ya no quedan cupos disponibles para esta clase.");
      return;
    }

    if (horarioOcupado(horarioSeleccionado)) {
      Alert.alert(
        "Horario ocupado",
        "Ya tienes una reserva en ese horario. Elige otro."
      );
      return;
    }

    agregarReserva({
      id: `${clase.id}-${horarioSeleccionado}-${Date.now()}`,
      claseId: clase.id,
      claseTitulo: clase.titulo,
      horario: horarioSeleccionado,
    });

    Alert.alert(
      "Reserva confirmada",
      `Reservaste "${clase.titulo}" para el horario ${horarioSeleccionado}.`
    );
  };

  return (
    <View style={styles.pantalla}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: clase.imagen }}
          style={[styles.portada, { height: isTable ? 300 : 200 }]}
          resizeMode="cover"
        />

        <View style={{ padding: spacing.lg }}>
          <Text style={typography.titulo}>{clase.titulo}</Text>
          <Text style={styles.descripcion}>{clase.descripcion}</Text>

          <View style={styles.datos}>
            <View style={styles.dato}>
              <Ionicons name="cash-outline" size={20} color={colors.primario} />
              <Text style={styles.datoValor}>{formatearPrecio(clase.precio)}</Text>
            </View>
            <View style={styles.dato}>
              <Ionicons name="time-outline" size={20} color={colors.primario} />
              <Text style={styles.datoValor}>{clase.duracion} min</Text>
            </View>
            <View style={styles.dato}>
              <Ionicons name="people-outline" size={20} color={colors.primario} />
              <Text style={styles.datoValor}>{disponibles} cupos</Text>
            </View>
            <View style={styles.dato}>
              <Ionicons name="calendar-outline" size={20} color={colors.primario} />
              <Text style={styles.datoValor}>
                {horarioSeleccionado ?? "Por confirmar"}
              </Text>
            </View>
          </View>

          <Text style={styles.subtituloHorario}>Elige un horario</Text>
          <View style={styles.listaHorarios}>
            {clase.horarios?.map((h) => (
              <Pressable
                key={h}
                onPress={() => setHorarioSeleccionado(h)}
                style={[
                  styles.chipHorario,
                  horarioSeleccionado === h && styles.chipHorarioActivo,
                ]}
              >
                <Text
                  style={[
                    styles.textoHorario,
                    horarioSeleccionado === h && styles.textoHorarioActivo,
                  ]}
                >
                  {h}
                </Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.profesor}>
            <Image source={{ uri: clase.profesor.foto }} style={styles.avatar} />
            <View>
              <Text style={styles.profesorNombre}>{clase.profesor.nombre}</Text>
              <Text style={styles.descripcion}>{clase.profesor.pais}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.barra, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Text style={styles.precio}>{formatearPrecio(clase.precio)}</Text>
        <Pressable
          style={[styles.boton, disponibles <= 0 && styles.botonDeshabilitado]}
          onPress={confirmarReserva}
          disabled={disponibles <= 0}
        >
          <Text style={styles.textoBoton}>
            {disponibles <= 0 ? "Sin cupos" : "Realizar reserva"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  portada: { width: '100%', backgroundColor: colors.primarioSuave },
  datos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
  },
  dato: { width: '48%', alignItems: 'center', gap: 4, marginBottom: spacing.sm },
  datoValor: { fontSize: 14, fontWeight: '800', color: colors.texto },
  subtituloHorario: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.texto,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  listaHorarios: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chipHorario: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.superficie,
    borderWidth: 1,
    borderColor: colors.borde,
  },
  chipHorarioActivo: {
    backgroundColor: colors.primario,
    borderColor: colors.primario,
  },
  textoHorario: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textoSecundario,
  },
  textoHorarioActivo: {
    color: colors.superficie,
  },
  profesor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.lg,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.borde },
  profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.texto },
  descripcion: { ...typography.cuerpo, color: colors.textoSuave, lineHeight: 22, marginTop: spacing.sm },
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.superficie,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  precio: { fontSize: 18, fontWeight: '800', color: colors.primario },
  boton: {
    backgroundColor: colors.primario,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  botonDeshabilitado: {
    backgroundColor: colors.borde,
  },
  textoBoton: {
    color: colors.superficie,
    fontSize: 14,
    fontWeight: '700',
  },
});