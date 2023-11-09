import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/students_data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  cardData = card_data;
  constructor() { }

  ngOnInit(): void {
  }

}
