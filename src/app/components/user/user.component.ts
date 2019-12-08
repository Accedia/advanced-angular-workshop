import { Component, Input } from '@angular/core';

@Component({
  selector: 'aw-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: {id: number, name: string};
}
