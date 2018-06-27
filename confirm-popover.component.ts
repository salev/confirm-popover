import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  template: `
    <ng-template #template>
      <div class="modal-body">
        <i class="fa fa-2x fa-pull-left fa-exclamation-triangle text-danger" data-fa-transform="up-2"></i>
        {{ confirm }}
      </div>
      <div class="modal-footer">
        <button (click)="result(false)" type="button" class="btn btn-default btn-sm" data-dismiss="modal">No</button>
        <button (click)="result(true)" type="button" class="btn btn-danger btn-sm">Yes</button>
      </div>
    </ng-template>
  `
})

export class ConfirmPopoverComponent {

  confirm: string;
  callback: Function;

  @ViewChild('template') confirmTemplate: TemplateRef<any>;

  result(r) {
    this.callback(r);
  }


}
