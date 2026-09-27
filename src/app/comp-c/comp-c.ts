import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-compC',
  styleUrl: './comp-c.css',
  templateUrl: './comp-c.html',
})
export class compC {

//reference Value Exapmle

onClick(element:any){
    console.log(element);
    console.dir(element.value);
}

onClick1(template:any){
    console.log(template);
}

//Example
employeeStatus = false;

}


