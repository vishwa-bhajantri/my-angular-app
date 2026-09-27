import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-change-detection-demo',
  styleUrl: './change-detection-demo.css',
  templateUrl: './change-detection-demo.html',
})
export class ChangeDetectionDemo {

  //Example for change Detection
  Employee = "John";

  changeEmployee(){
    this.Employee = "Peter";
  }


  //Example for change Detection

  currentDate = new Date();

  constructor(private cd : ChangeDetectorRef){}

  employeeStatus = "Inactive";

  startTimer(){

    this.employeeStatus = "Active";

    setInterval(() => {
    this.currentDate = new Date();
    this.cd.markForCheck();
    },1000)
  }
}
