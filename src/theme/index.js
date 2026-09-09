export {Platform} from "react-native";

export const colors = {
    fondo: '#FFF7ED',
    superficie: '#FFFFFF',
    primario: '#C86B12',
    texto: '#2F241F',
    textoSecundario: '#6B5B53',
    borde: '#E7A45E'
}

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
}

export const radius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24
}

export const typography = {
    titulo: {fontSize: 20, fontWeight: '700', color: colors.texto},
    subtitulo: {fontSize: 18, fontWeight: '600', color: colors.texto}
}

export default {colors, spacing, radius, typography}