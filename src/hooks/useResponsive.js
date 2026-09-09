import { useWindowDimensions } from "react-native";

export default function useResponsive() {
  const { width, height } = useWindowDimensions();
  const isTable = width >= 768;
  const isHorizontal = width > height;

  return {
    width,
    height,
    isTable,
    isHorizontal,
    columnas: isTable ? 2 : 1,
    ancho: isTable ? 320 : Math.min(width * 0.72, 300),
    paddingHorizontal: isTable ? 32 : 16,
  };
}