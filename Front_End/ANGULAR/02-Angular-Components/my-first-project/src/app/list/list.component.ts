import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

const myNumber = 1;

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
  myNumber = myNumber;
  selectedUserIndex!: null | number;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0;
  }

  constructor() {}

  handleClickEvent(e: MouseEvent) {
    // console.log('CLICK');
    console.log(e);
    this.showLastName = !this.showLastName;
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index;
  }

  customEventHandler($event: ICustomEvent) {
    console.log($event);
  }
}
