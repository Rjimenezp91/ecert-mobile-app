import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
  showFiller:boolean;
  constructor() { }

  ngOnInit(): void {
    this.showFiller = false;
  }
}
