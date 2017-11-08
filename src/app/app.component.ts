import { Component } from '@angular/core';
import {AppComponentService} from "./app.component.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  constructor(private appComponentService: AppComponentService) {}

  login(){

    console.log("Attempting to login");
    this.appComponentService.login()
      .subscribe(
        res => {
          console.log("getting there...");
          //response here

        },
        (error) => console.log("Oops "+error)
      );

  }

}

