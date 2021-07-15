import { Jornada } from "./jornada";
//Interface que permite concer los tipos de dato que contiene un Turno
export interface Turno {
    fechaFin?: Date,
    fechaInicio: Date,
    fechaModificacion?: Date,
    estadoTurno: string,
    finTurno?: string,
    horaFin: string,
    horaInicio: string,
    idTurno?: number,
    inicioTurno?: string,
    jornada: Jornada,
    labor: string,
    modificador?: string,
    observacion?: string,
}
