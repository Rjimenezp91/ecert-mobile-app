export class DocumentPdf{
    id: number;
    file: string;
    solicitante: string;
    fecha: Date;
    estado: string;
    progreso: string;
    isChecked: boolean
    
    public constructor(
        id: number,
        file: string,
        solicitante: string,
        fecha: Date,
        estado: string,
        progreso: string,
        isChecked: boolean){
          this.id = id,
            this.file = file,
            this.solicitante = solicitante,
            this.fecha = fecha,
            this.estado = estado,
            this.progreso = progreso,
            this.isChecked =  isChecked
    }
}