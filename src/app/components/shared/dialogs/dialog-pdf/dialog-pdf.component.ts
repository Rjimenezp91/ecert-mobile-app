import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-pdf',
  templateUrl: './dialog-pdf.component.html',
  styleUrls: ['./dialog-pdf.component.css']
})
export class DialogPdfComponent implements OnInit {
  pdfSrc = "assets/Data/CV_RJimenez_v2.pdf";
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  zoom: number = .5
  

  constructor() { }

  ngOnInit(): void {
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }
  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  zoomIn() {
    this.zoom += .5
  }
  zoomOut() {
    this.zoom -= .5
  }



}
