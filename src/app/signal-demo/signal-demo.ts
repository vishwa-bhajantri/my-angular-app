import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal-demo',
  styleUrl: './signal-demo.css',
  templateUrl: './signal-demo.html',
})
export class SignalDemo {

  EmployeeName = signal("vishwa");
  EmployeeCount = signal(1);


  changeEmployee(){
    this.EmployeeName.set("Peter");
    this.EmployeeCount.set(10);
  }


increaseEmployeeCOunt(){

  this.EmployeeCount.update((currentCOunt)=>{
    currentCOunt = currentCOunt + 1;
    return currentCOunt;
  })
}  


decreaseEmployeeCOunt(){
  this.EmployeeCount.update((currentCOunt)=>{
    currentCOunt = currentCOunt - 1;
    return currentCOunt;
  })
}

resetEmployeeCOunt(){
  this.EmployeeName.set("vishwa");
  this.EmployeeCount.set(1);
}



}
