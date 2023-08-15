import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {
  skillsArray : Array<string> = ["HTML", "CSS", "JS","TS","Angular"]
  constructor() { }

  ngOnInit(): void {
  }

}
