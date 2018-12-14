import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MultaType } from '@app/core/multa-type/multa-type';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';
import { TeamService } from '@app/core/team/team.service';
import { Team } from '@app/core/team/team';

@Component({
  selector: 'app-new-multa-type',
  templateUrl: './new-multa-type.component.html',
  styleUrls: ['./new-multa-type.component.scss'],
})

export class NewMultaTypeComponent implements OnInit {
  multaType: MultaType;
  team: Team = new Team();
  id: string;
  showDelete: Boolean = false;
  title: string;
  constructor(private multaTypeService: MultaTypeService, private teamService: TeamService, private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this.multaType = new MultaType();
    this._onInitMultaType();
  }

  _onInitMultaType() {
    if (this.id !== undefined) {
      this.title = 'Modifica questo tipo di multa';
      this.showDelete = true;
      this.multaTypeService.getMultaTypeById(this.id).subscribe(data => {
        this.multaType = data;
      });
    } else {
      this.title = 'Nuova tipo di multa';
    }
  }

  addMultaType(): void {
    this.teamService.getTeam().subscribe(data => {
      this.multaType.teamId = data.id;
      this.multaTypeService.saveMultaType(this.multaType).subscribe(result => {
        this.router.navigate(['/multa-types']);
      });
    });
  }

  deleteMulta(): void {
    this.multaTypeService.deleteMultaTypeById(this.id).subscribe(data => {
      this.router.navigate(['/multa-types']);
    });
  }

}
