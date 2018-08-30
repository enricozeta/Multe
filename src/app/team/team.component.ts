import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { Team } from './team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: Team;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.onInitTeam();
  }

  onInitTeam() {
    this.teamService.getTeam().subscribe(data => {
      this.team = data;
    });
  }

}
