import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

  // constructor(){
  //   setTimeout(() => {
  //     this.customInputType = "checkbox";
  //   }, 50);
  // }

        //String Interpolation 
        ProjectName: string = "Angular";
        title: string = "Basic App";

        getCustomerName(): string{
          return "Steve"
        }

        //property Data Binding 

        customerRole: string = "Admin";

        Message:string = "Login Hours 10 am to 11 am";

        // customInputType = "checkbox"

        customInputType:string = "radio"

        //event binding

        btnClick(){
          console.log("Btn Clicked");
          console.log(this.EmpName);
        }

        EmpName = ""

        placeHolderMessage = "please enter your name";
        captureData(eventDetails: KeyboardEvent){
          //console.log("you enter some charecter");
          
          var inpE1 = eventDetails.target as HTMLInputElement;
          // console.log(inpE1);
          // console.dir(inpE1);

          console.log(inpE1.value);
          this.EmpName = inpE1.value;
        }


        //ng model
        customerLocation = "India";

        // customerLocationChange(Name: any){
        //   this.customerLocation = Name;
        // }

}