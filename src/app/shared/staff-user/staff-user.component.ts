import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaffUser } from '@app/core/staff-user/staff-user';
import { TeamService } from '@app/core/team/team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff-user',
  templateUrl: './staff-user.component.html',
  styleUrls: ['./staff-user.component.scss'],
})

export class StaffUserComponent implements OnInit {
  staffUser: StaffUser;

  constructor(private http: HttpClient, private teamService: TeamService, private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.staffUser = new StaffUser();
    this._setName();
  }

  _setName() {
    this.teamService.getTeam().subscribe(data => {
      this.staffUser.email = data.name;
    });
  }

  _saveStaffUser() {
    this.teamService.saveStaffUser(this.staffUser).subscribe(data => {
      this.router.navigate(['/team-settings']);
    });
  }
}
