import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBoxes = false;
  rowNum:number = 0;
  row: any[] = [];


  renderBoxes() {
    try {
      this.rowNum = +this.rowNum;
      if (typeof this.rowNum !== 'number' && Number.isNaN(this.rowNum)) {
        alert("Please enter a number")
      } else {
        this.showBoxes = true;
        this.row = Array(this.rowNum).fill(this.rowNum);
      }
    } catch(e) {
      alert("Please enter a number")
    }
  }
}
