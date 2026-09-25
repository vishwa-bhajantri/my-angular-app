import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-compA',
  styleUrl: './comp_a.css',
  templateUrl: './comp_a.html',
})

export class compA {
  divBgColor = 'green';
  divColor = 'yellow';

  issuccess = false;
  divClass = 'success';
  divFailure = 'failure'


// ngif

isStudentPassed = "Pass";


//ngFor
Employees = ["peter", "John", "Steve"];


EmployeeDetails= [
  {
    Name: 'john',
    Salary: '12k',
  },
  {
    Name: 'steve',
    Salary: '15k',
  },
  {
    Name: 'Robert',
    Salary: '20k',
  },
];

//ngSwith Case

CustomerId = 0;

}


