import { Component, OnInit } from '@angular/core';
import { DocumentPdf } from '../../interfaces/document';
import { Data } from '../../../assets/Data/dataTable';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPdfComponent } from '../shared/dialogs/dialog-pdf/dialog-pdf.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-mis-documentos',
  templateUrl: './mis-documentos.component.html',
  styleUrls: ['./mis-documentos.component.css'],
})
export class MisDocumentosComponent implements OnInit {
  documents: DocumentPdf[];
  displayedColumns: string[] = [
    'isChecked',
    'Documento',
    'Solicitante',
    'Fecha',
    'Estado',
    'Progreso',
    'Opciones',
  ];
  checked = [];
  documentsForm: FormArray;
  documentsFormGroup: FormGroup;
  // documentsForm: DocumentPdf[];
  dataSourceDocuments = new MatTableDataSource<DocumentPdf>([]);
  pdfSrc = 'assets/Data/CV_RJimenez_v2.pdf';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.documents = Data.DATA;
    this.documentsForm = this.createFormGroupTable(this.documents);
    this.documentsFormGroup = new FormGroup({
      arrayDocs: this.documentsForm
    })
    
    this.dataSourceDocuments.data = this.documentsFormGroup.controls.arrayDocs.value;
    this.getCheckbox();
  }

  get getArrayForm(): FormArray{
    return this.documentsFormGroup.controls.arrayDocs as FormArray;
  }

  getCheckbox() {
    this.checked = this.documents.filter((i) => i.isChecked == true);
  }

  changeChkState(element, index) {
    const statusPrev = element.isChecked
   const docFormArray =  this.documentsFormGroup.controls['arrayDocs'] as FormArray
   docFormArray.controls[index].value.isChecked = !statusPrev;
 
  }

  createFormGroupTable(documents: DocumentPdf[]) {
    const arrayDocs = [];
    const frmArray = new FormArray([])
    documents.forEach((document: DocumentPdf) => {
      const doc = new FormGroup({
        id: new FormControl(document.id),
        file: new FormControl(document.file),
        solicitante: new FormControl(document.solicitante),
        fecha: new FormControl(document.fecha),
        estado: new FormControl(document.estado),
        progreso: new FormControl(document.progreso),
        isChecked: new FormControl(document.isChecked),
      });
      frmArray.push(doc);
    });
    return frmArray;
  }

  openDialogPdf() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';

    const dialogRef = this.dialog.open(DialogPdfComponent, dialogConfig);
  }

  logRow(row) {
 this.dataSourceDocuments._updateChangeSubscription();
  }

  borrarDoc(id){
    this.getArrayForm.removeAt(id)
      return  this.dataSourceDocuments.data = this.getArrayForm.value;
   
  }
}
