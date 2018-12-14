import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProfileService } from '@app/core/profile/profile.service';
import { Profile } from '@app/core/profile/profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  emailFormControl = new FormControl();
  profile: Profile;

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.profile = new Profile();
    this._onInitUser();
  }

  _onInitUser() {
    this.profileService.getUser().subscribe(data => {
      this.profile = data;
    });
  }

  _save() {
    this.profileService.saveUser(this.profile).subscribe(data => {
      this.router.navigate(['/profile']);
    });
  }
}
