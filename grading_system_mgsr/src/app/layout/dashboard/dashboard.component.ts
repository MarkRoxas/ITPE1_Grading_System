import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  cardData = card_data;
  constructor() { }

  ngOnInit(): void {
  }

}
