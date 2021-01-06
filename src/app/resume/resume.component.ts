import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  name = "Dana Kimmel";
  address = "3916 Top Flite Ln.";
  phone = "513-301-3624";
  email = "danakimmel@zohomail.com";
  
  constructor() { }

  ngOnInit(): void {
  }

}
