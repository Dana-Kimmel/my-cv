import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = 'Dana Kimmel';
  address = '111 Test Street';
  phone = '555-444-5555';
  email = 'dana@test.com';
}
