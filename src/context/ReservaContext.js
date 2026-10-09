import React, { createContext } from 'react'
import useAlmacenamiento from '../hooks/useAlmacenamiento'

export const ReservaContext = createContext(null)

export function ReservaProvider({ children }) {
  const { valor: perfil, setValor: setPerfil } = useAlmacenamiento('perfil', null)
  const { valor: reservas, setValor: setReservas } = useAlmacenamiento('reservas', [])
  const { valor: sesionIniciada, setValor: setSesionIniciada } = useAlmacenamiento('sesionIniciada', false)

  const guardarPerfil = (datos) => {
    setPerfil(datos)
    setSesionIniciada(true)
  }

  const iniciarSesion = () => {
    setSesionIniciada(true)
  }

  const cerrarSesion = () => {
    setSesionIniciada(false)
  }

  const agregarReserva = (reserva) => {
    setReservas((anteriores) => [...anteriores, reserva])
  }

  const cancelarReserva = (idReserva) => {
    setReservas((anteriores) => anteriores.filter((r) => r.id !== idReserva))
  }

  const cancelarTodas = () => {
    setReservas([])
  }

  const horarioOcupado = (horario) => {
    return reservas.some((r) => r.horario === horario)
  }

  const valorContexto = {
    perfil,
    guardarPerfil,
    sesionIniciada,
    iniciarSesion,
    cerrarSesion,
    reservas,
    agregarReserva,
    cancelarReserva,
    cancelarTodas,
    horarioOcupado,
  }

  return (
    <ReservaContext.Provider value={valorContexto}>
      {children}
    </ReservaContext.Provider>
  )
}