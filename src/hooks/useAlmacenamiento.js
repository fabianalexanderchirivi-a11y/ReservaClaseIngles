import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAlmacenamiento(clave, valorInicial) {
  const [valor, setValor] = useState(valorInicial);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const cargar = async () => {
      try {
        const guardado = await AsyncStorage.getItem(clave);
        if (guardado !== null) {
          setValor(JSON.parse(guardado));
        }
      } catch (error) {
        console.log('Error al cargar', clave, error);
      } finally {
        setListo(true);
      }
    };
    cargar();
  }, [clave]);

  
  useEffect(() => {
    if (!listo) return; 
    AsyncStorage.setItem(clave, JSON.stringify(valor)).catch((error) => {
      console.log('Error al guardar', clave, error);
    });
  }, [valor, listo]);

  return { valor, setValor, listo };
}