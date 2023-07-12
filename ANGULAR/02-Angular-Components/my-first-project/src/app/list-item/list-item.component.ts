import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
// dekorirame s operator input za da vzemem data za users

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})

export class ListItemComponent implements OnInit, OnDestroy{
  @Input() user!: { firstName: string; lastName: string };
  @Input() showLastName!: boolean;

  // @Input() staticString!: string;
  @Input() staticString!: string;
  @Input() staticNumber!: number;

  @Output('myCustomEvent') customEvent = new EventEmitter<ICustomEvent>();

  intervalId: number | undefined;

  constructor() {
    console.log(this.user);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit() {    
      this.intervalId = setInterval(() => {
    },5000) as unknown as number;
  }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({ test: 123 });
  }
}

// class Person{
//   name!: string;

//   ngOnInit(){
//     console.log(this.name);
//   }
// }
// const ivan=new Person()
// ivan.name='Ivan'
// ivan.ngOnInit()
