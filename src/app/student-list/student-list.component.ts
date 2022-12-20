import { Component, OnInit } from '@angular/core';
import { StudDataService } from '../stud-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  studList = [{name:'Mayuri More', rollno: '123'},
  {name:'Taaha', rollno: '123'},];
  constructor(
    private studData: StudDataService
  ) { }

  ngOnInit(): void {
    this.studList = this.studData.getStudentList();
    console.log("this.studList",this.studList);
  }
}
