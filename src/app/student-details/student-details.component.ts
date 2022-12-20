import { Component, OnInit } from '@angular/core';
import { StudDataService } from '../stud-data.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
   studDetails = [{name:'Mayuri More', rollno: '123'},
   {name:'Taaha', rollno: '123'},];
  constructor(
    private studData: StudDataService
  ) { }

  ngOnInit(): void {
    
    this.studDetails = this.studData.getStudentList();
    
    console.log("this.studDetails",this.studDetails);
  
}
}
