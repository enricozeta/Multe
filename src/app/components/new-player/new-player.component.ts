import { Component, OnInit } from '@angular/core';
import { TeamService } from '@app/core/team/team.service';
import { PlayerService } from '@app/core/player/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '@app/core/player/player';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})

export class NewPlayerComponent implements OnInit {
  player: Player = new Player();
  id: string;
  showDelete: Boolean = false;
  title: string;

  constructor(private playerService: PlayerService, private teamService: TeamService, private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this._onInitPlayer();
  }

  _onInitPlayer(): void {
    if (this.id !== undefined) {
      this.title = 'Modifica giocatore';
      this.showDelete = true;
      this.playerService.getPlayer(this.id).subscribe(data => {
        this.player = data;
      });
    } else {
      this.title = 'Nuovo giocatore';
    }
  }

  _addPlayer(): void {
    this.teamService.getTeam().subscribe(data => {
      this.player.teamId = data.id.toString();
      this.playerService.savePlayer(this.player).subscribe(result => {
        this.router.navigate(['/players']);
      });
    });
  }

  _deletePlayer(): void {
    this.playerService.deletePlayer(this.id).subscribe(data => {
      this.router.navigate(['/players']);
    });
  }
}
