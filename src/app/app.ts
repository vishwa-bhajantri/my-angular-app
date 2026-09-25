import { Component} from '@angular/core';
import { compA } from './comp_a/comp_a';
import { compB } from './comp-b/comp-b';

@Component({
  imports: [compA, compB],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

}
