import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {
  company = "Max Technical Training";
  role = "Student";
  startDate = "08/10/20";
  endDate = "02/25/21";
  
  constructor() { }

  ngOnInit(): void {
  }

}
