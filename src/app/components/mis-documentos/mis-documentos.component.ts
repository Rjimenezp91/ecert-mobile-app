import { Component, OnInit } from '@angular/core';
import { DocumentPdf } from '../../interfaces/document';
import { Data } from '../../../assets/Data/dataTable';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPdfComponent } from '../shared/dialogs/dialog-pdf/dialog-pdf.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
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
    console.log('this.documentsFormGroup', this.documentsFormGroup);
    
    this.dataSourceDocuments.data = this.documentsFormGroup.controls.arrayDocs.value;
    this.getCheckbox();
  }

  get getArrayForm(): FormArray{
    return this.documentsForm as FormArray;
  }

  getCheckbox() {
    this.checked = this.documents.filter((i) => i.isChecked == true);
  }

  changeChkState(element, index) {
    const statusPrev = element.isChecked
    console.log('prev: ', statusPrev);
    
   const docFormArray =  this.documentsFormGroup.controls['arrayDocs'] as FormArray
   docFormArray.controls[index].value.isChecked = !statusPrev;
   
  //  a.controls[index].patchValue({
  //    isChecked : (!statusPrev)
  //  })

   
//     const it1= this.getArrayForm.controls[index]
//     it1.patchValue({
//       isChecked: !statusPrev
//     })
//     this.documentsForm.controls[index].patchValue({
//       isChecked : !statusPrev
//     })
//   const newFg = (this.getArrayForm.controls[index] as FormGroup).controls 
// newFg.isChecked.patchValue({
//       value: !statusPrev
//     })
//     console.log(newFg);
    
    
    // it1.value.isChecked = !it1.value.isChecked
    // it1.patchValue
    // this.getArrayForm.value[index].get('isChecked')
    
    // this.getArrayForm[index]

    // this.documents.filter((item) => {
    //   if (item.id == id) {
    //     item.isChecked = !item.isChecked;
    //     this.getCheckbox();
    //   }
    // });
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
  // createFormGroupTable(documents: DocumentPdf[]){
  // const arrayDocs = [];
  //   documents.forEach((document : DocumentPdf )=>{
  //     console.log(document);
  //     const doc = new DocumentPdf(
  //      document.id,
  //      document.file,
  //      document.solicitante,
  //      document.fecha,
  //      document.estado,
  //      document.progreso,
  //      document.isChecked

  //     )
  //     arrayDocs.push(doc);

  //   })
  //   return arrayDocs
  // }

  openDialogPdf() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';

    const dialogRef = this.dialog.open(DialogPdfComponent, dialogConfig);
  }

  logRow(row) {
 console.log('row', row);
 this.dataSourceDocuments._updateChangeSubscription();
  }
}
