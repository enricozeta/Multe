import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  emailFormControl = new FormControl();

  user: object;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.user = {};

    this._onInitUser();
  }

  _onInitUser() {
    this.profileService.getUser().subscribe(data => {
      this.user = data;
    });
  }
}
