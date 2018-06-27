import { NgModule } from '@angular/core';
import { ConfirmDilogDirective } from './confirm-popover.directive';
import { ConfirmPopoverComponent } from './confirm-popover.component';


@NgModule({
  declarations: [
    ConfirmDilogDirective,
    ConfirmPopoverComponent
  ],
  exports: [
    ConfirmDilogDirective
  ],
  entryComponents: [
    ConfirmPopoverComponent
  ]
})
export class ConfirmPopoverModule {
}
