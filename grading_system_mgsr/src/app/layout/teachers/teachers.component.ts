import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/teachers_data';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  cardData = card_data;
  constructor() { }

  ngOnInit(): void {
  }

}
