import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/dashboard_data';
import { student_data } from 'src/shared_data/student_data';
import { teacher_data } from 'src/shared_data/teacher_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  cardData = card_data;
  studentData = student_data;
  teacherData = teacher_data;
  constructor() { }

  ngOnInit(): void {
  }

}
