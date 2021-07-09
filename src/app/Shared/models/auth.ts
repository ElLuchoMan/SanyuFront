import { Rol } from "./rol";

export interface Auth {
    documento: number,
    estadoContratista: string,
    nombre: string,
    rol: Rol,
}