import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  user: any;

  constructor(private profileService: ProfileService) {  }

  ngOnInit() {
    this.onInitUser();
  }

  onInitUser() {
    this.profileService.getUser().subscribe(data => {
      this.user = data;
    });
  }
}
