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


}


