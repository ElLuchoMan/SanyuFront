import { Rol } from "./rol";
//Interface de la clase Auth, que contiene los datos de un usuario logueado que se almacenarán en el LocalStorage
export interface Auth {
    documento: number,
    estadoContratista: string,
    nombre: string,
    rol: Rol,
}