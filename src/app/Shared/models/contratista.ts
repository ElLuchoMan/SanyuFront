import { Rol } from "./rol";
import { Turno } from "./turno";

export interface Contratista {
    documento: number,
    estadoContratista: string,
    nombre: string,
    password: string,
    telefono: string,
    rol: Rol,
    turnos: Turno,
}
