import { Jornada } from "./jornada";

export interface Turno {
    fechaFin: Date,
    fechaInicio: Date,
    fechaModificacion: Date,
    finTurno: string,
    horaFin: string,
    horaInicio: string,
    idTurno: number,
    inicioTurno: string,
    jornada: Jornada,
    labor: string,
    modificador: string,
    observacion: string,
}
