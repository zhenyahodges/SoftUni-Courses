import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  users = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
    },
    {
      firstName: 'Petar',
      lastName: 'Petrov',
    },
  ];

  showLastName = false;

  constructor() {}

  handleClickEvent(e: MouseEvent){
    // console.log('CLICK');
    console.log(e);
    this.showLastName = !this.showLastName;
    
  }
}
