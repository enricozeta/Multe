import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-user',
  templateUrl: './staff-user.component.html',
  styleUrls: ['./staff-user.component.scss'],
})

export class StaffUserComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

}
