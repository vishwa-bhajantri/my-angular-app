import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-compB',
  styleUrl: './comp-b.css',
  templateUrl: './comp-b.html',
})
export class compB {

  ZoneStatus = true;
  message = "You are Safe";


isEmployeegotHike = true;

evtClick(){
  this.ZoneStatus = false;
  this.message = "You are not Safe"

  this.isEmployeegotHike = false;
}

//Example 3:

myScore = 5;


//Example 4:

// employees = [
//   {id: 101, name: "Ravi"},
//   {id: 102, name: "Kiran"},
//   {id: 103, name: "Suresh"},
// ];

employees :[{id : "", name : ""}] | [] = [];

}
