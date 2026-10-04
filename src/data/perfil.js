export const PERFIL_VACIO = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  foto: '',
}

export const FOTO_POR_DEFECTO = require('../../assets/icon.png')

export function tienePerfilCreado(perfil) {
  return perfil !== null && perfil.nombre.trim() !== ''
}

export function fuenteFotoPerfil(perfil) {
  if (perfil?.foto) {
    return { uri: perfil.foto }
  }
  return FOTO_POR_DEFECTO
}