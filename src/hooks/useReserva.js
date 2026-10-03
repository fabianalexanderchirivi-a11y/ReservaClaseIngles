import { useContext} from "react";
import { ReservaContext} from '../context/ReservaContext'
export default function useReserva(){
    const contexto= useContext(ReservaContext);
    if(!contexto){
        throw new Error('useReserva debe usarse dentro de <ReservaProvider>')
    }
    return contexto;

};