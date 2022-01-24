import { DocumentPdf } from "src/app/interfaces/document";
export class Data{
    public static DATA:DocumentPdf[] = [
        {id: 1, file: 'nombre archivo', solicitante: 'empleado 1', fecha: new Date, estado: 'finalizado', progreso: '2/3', isChecked: true},
        {id: 2, file: 'nombre archivo', solicitante: 'empleado 2', fecha: new Date, estado: 'por firmar', progreso: '2/3', isChecked: false},
        {id: 3, file: 'nombre archivo', solicitante: 'empleado 3', fecha: new Date, estado: 'rechazado', progreso: '2/3', isChecked: true},
        {id: 4, file: 'nombre archivo', solicitante: 'empleado 4', fecha: new Date, estado: 'finalizado', progreso: '2/3', isChecked: false},
        {id: 5, file: 'nombre archivo', solicitante: 'empleado 5', fecha: new Date, estado: 'por firmar', progreso: '2/3', isChecked: true},
        {id: 6, file: 'nombre archivo', solicitante: 'empleado 6', fecha: new Date, estado: 'finalizado', progreso: '2/3', isChecked: false},
        {id: 7, file: 'nombre archivo', solicitante: 'empleado 7', fecha: new Date, estado: 'finalizado', progreso: '2/3', isChecked: true},
        ]; 
}