import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '@app/core/team/team';
import { TeamService } from '@app/core/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})

export class TeamComponent implements OnInit {
  team: Team;

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {
    this._onInitTeam();
  }

  _onInitTeam() {
    this.team = new Team();
    this.teamService.getTeam().subscribe(data => {
      this.team = data;
    });
  }

  _saveTeam() {
    this.teamService.saveTeam(this.team).subscribe(data => {
      this.router.navigate(['/team-settings']);
    });
  }
}
