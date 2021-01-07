import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  school ="LaPlata High School";
  year = "1995";
  major = "N/A";
  
  constructor() { }

  ngOnInit(): void {
  }

}
