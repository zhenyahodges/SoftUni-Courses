import { Component, EventEmitter, Input, Output } from '@angular/core';
// dekorirame s operator input za da vzemem data za users

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() user!: { firstName: string; lastName: string };
  @Input() showLastName!: boolean;

  // @Input() staticString!: string;
  @Input() staticString!: string;
  @Input() staticNumber!: number;

  @Output('myCustomEvent') customEvent = new EventEmitter<ICustomEvent>();

  constructor() {}

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({ test: 123 });
  }
}
