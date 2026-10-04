import React, { createContext } from 'react'
import useAlmacenamiento from '../hooks/useAlmacenamiento'

export const ReservaContext = createContext(null)

export function ReservaProvider({ children }) {
  const { valor: perfil, setValor: setPerfil } = useAlmacenamiento('perfil', null)
  const { valor: reservas, setValor: setReservas } = useAlmacenamiento('reservas', [])

  const guardarPerfil = (datos) => {
    setPerfil(datos)
  }

  const agregarReserva = (reserva) => {
    setReservas((anteriores) => [...anteriores, reserva])
  }

  const cancelarReserva = (idReserva) => {
    setReservas((anteriores) => anteriores.filter((r) => r.id !== idReserva))
  }

  const horarioOcupado = (horario) => {
    return reservas.some((r) => r.horario === horario)
  }

  const valorContexto = {
    perfil,
    guardarPerfil,
    reservas,
    agregarReserva,
    cancelarReserva,
    horarioOcupado,
  }

  return (
    <ReservaContext.Provider value={valorContexto}>
      {children}
    </ReservaContext.Provider>
  )
}