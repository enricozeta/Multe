import { Component, OnInit } from '@angular/core';

import { Team } from '@app/core/team/team';
import { TeamService } from '@app/core/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team: Team;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this._onInitTeam();
  }

  _onInitTeam() {
    this.team = new Team();

    this.teamService.getTeam().subscribe(data => {
      this.team = data;
    });
  }
}
