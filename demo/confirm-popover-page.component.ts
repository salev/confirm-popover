import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'slv-confirm-popopver-page',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of items; let idx = index;">
        <i class="fas fa-2x fa-chess-{{item.name}}"></i>
        {{item.name}}

        <a href="javascript: ;"
           class="pull-right"
           (click)="deleteItem(idx)"
           slv-confirm="To delete &quot;{{item.name}}&quot;?"
           placement="left">
          <i class="fa fa-trash-alt text-danger"></i>
        </a>
      </li>
    </ul>
  `
})

export class ConfirmPopoverPageComponent {

  items = [
    {id: 1, name: 'king'},
    {id: 2, name: 'queen'},
    {id: 3, name: 'bishop'},
    {id: 4, name: 'knight'},
    {id: 5, name: 'rook'},
    {id: 6, name: 'pawn'}
  ];

  deleteItem(idx: any) {
    this.items.splice(idx, 1);
  }


}
