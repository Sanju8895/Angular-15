import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  // String type
myName:string ="Sanjaya Nayak";
MyName2:string= "Sanju";

// Number type
num:number=101;
num1:number=102.00;

// undefined type
nonValue:undefined;
name2:undefined;

// null type
currentvalue:null=null;

// Boolean Type
isIndian:boolean= true;

// Array Type
arr:any[]=[123,"Sanju",true];
arr1:number[]= [101,102,103,104,105];
arr2:string[]=["sanju","Biju","Raju"];
arr3:object[] =[
  {name:"sanju",age:25,add:"odisha"},
  {name:"raju",age:27,add:"karnataka"},
  {name:"pupun",age:22,add:"HYD"}
];

// Object type
obj:object= {name:"Sachin" ,age: 30 ,add: "pune"};
obj1:object ={fname: "Prakash", lname:"Nayak", fullName: function(){return `this.fname this.lname`}};

// Function Syntax
 myFunc(){
  let fName ="sanjaya";
  let lName ="Nayak";
  return alert(fName+ lName);
 }

}
