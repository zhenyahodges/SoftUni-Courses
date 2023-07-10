import { Component, Input } from '@angular/core';
// dekorirame s operator input za da vzemem data za users 

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() user!: { firstName: string; lastName: string; };
  @Input() showLastName!: boolean;

  @Input() staticString!: string;
}
