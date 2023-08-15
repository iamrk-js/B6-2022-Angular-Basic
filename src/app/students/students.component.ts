import { Component, OnInit } from '@angular/core';
import { Istudent } from '../shared/model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  stdList: Istudent[] = [
    {
      fname: "Tony",
      lname: "Stark",
      nickName: "Ironman",
      email: "tony@stark.com",
      contact: 1234567890
    },
    {
      fname: "Peter",
      lname: "Parkar",
      nickName: "SpiderMan",
      email: "peter@stark.com",
      contact: 1234567890
    },
    {
      fname: "Bruse",
      lname: "Wayne",
      nickName: "Batman",
      email: "bruse@stark.com",
      contact: 1234567890
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
