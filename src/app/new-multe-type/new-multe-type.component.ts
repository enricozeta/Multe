import { Component, OnInit } from '@angular/core';
import {MultaTypeService} from '../multe-types/multaType.service';
import { MultaType } from '../multe-types/multeType';

@Component({
  selector: 'app-new-multe-type',
  templateUrl: './new-multe-type.component.html',
  styleUrls: ['./new-multe-type.component.scss']
})
export class NewMulteTypeComponent implements OnInit {

  multaType: MultaType;

  constructor(private multaTypeService: MultaTypeService) { }

  ngOnInit() {
    this.onInitMultaType();
  }

  onInitMultaType() {
    this.multaTypeService.getMultaTypeById().subscribe(data => {
      this.multaType = data;
    });
  }

}
