import { Rol } from "./rol";
import { Turno } from "./turno";
//Interface que permite concer los tipos de dato que contiene un Contratista
export interface Contratista {
    documento: number,
    estadoContratista: string,
    nombre: string,
    password: string,
    telefono: string,
    rol: Rol,
    turnos?: Turno,
}
