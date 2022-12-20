import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudDataService {
  /*getStudentList(): never[] {
    throw new Error('Method not implemented.');
  }*/

  constructor() { }
  getStudentList(){
    return [
      {name:'Vidula Deshpande', rollno: '123'},
      {name:'abc abc', rollno: '123'},
    ]
};
};
