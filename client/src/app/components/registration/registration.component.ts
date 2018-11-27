import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public RegistrationDetails = {};

  constructor(private appservice: AppService) { }

  ngOnInit() {
  }

  register(data) {

    console.log(data);
    this.appservice.register(data).subscribe((response) => {
      console.log(response);
    });
  }
}
