import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
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


