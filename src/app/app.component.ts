import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  person=[
    {firstName:"Akhil",	lastName:"Kumar",	email:"akhil@gmail.com"	,phoneNumber:9959515110,	company:"BuzzBoard",birthday:"14-03-1991"},
    {firstName:"Rahul",	lastName:"Dev",	email:"rahul@gmail.com"	,phoneNumber:8923193993,	company:"Infosys",birthday:"09-07-1990"},
    {firstName:"Sampath",	lastName:"Kumar",	email:"sam@gmail.com"	,phoneNumber:9703037744,	company:"Cognizant",birthday:"27-06-1989"},
  ];
  
  registerReactiveForm=new FormGroup({
    firstName : new FormControl[""],
    lastName: new FormControl[""],
    email: new FormControl[""],
    phoneNumber:new FormControl[""],
    company:new FormControl[""],
    gender: new FormControl[""],
    birthday: new FormControl[""],
    password: new FormControl[""],
    confirmPassword: new FormControl[""],


  });

  onSubmit(data:any){
    this.person.push(this.registerReactiveForm.value)
  }
}