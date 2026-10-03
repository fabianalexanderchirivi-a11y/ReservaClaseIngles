import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAlmacenamiento(clave, valorInicial){
    const {valor, setValor}= useState( valorInicial);
    const{ listo, setListo}= useState(false);

}