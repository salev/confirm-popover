import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {ComponentLoaderFactory, PopoverConfig, PopoverDirective} from 'ngx-bootstrap';
import {ConfirmPopoverComponent} from './confirm-popover.component';


@Directive({ selector: '[slv-confirm]' })
export class ConfirmDilogDirective extends PopoverDirective implements OnInit {

  @Input('slv-confirm') confirm: string;

  // Note: optional parameter which helps to hide confirmation
  // when host is a popover and can be closed by outside click.
  // Use (onShowen) and (onHidden) which ngx provides.
  @Input('isHostHidden')
  set isHostHidden(value: boolean) {
      if (value) {
        this.hide();
        this._reset();
      }
  }


  private nativeElement = null;
  private isActive = false;
  private clickEvent = null;

  constructor(elementRef: ElementRef,
              renderer: Renderer2,
              private viewContainerRef: ViewContainerRef,
              config: PopoverConfig,
              cis: ComponentLoaderFactory,
              private resolver: ComponentFactoryResolver) {

    super(elementRef, renderer, viewContainerRef, config, cis);
    this.nativeElement = elementRef.nativeElement;
    this.initClickInterrupter();
  }

  ngOnInit() {
    this.initConfirmComponent();
    this.hide();
  }

  private initClickInterrupter() {
    const elm = this.nativeElement;

    elm.parentNode
      .addEventListener('click', (e) => {

      if (!this.clickEvent || isSecondClickOnTrigger(e)) {
        e.stopPropagation();
      }

      if (this.isActive) {
        return;
      }

      this.show();
      this.clickEvent = e;
      this.isActive = true;

    }, true );

    const isSecondClickOnTrigger = (e) => {
      return this.clickEvent && elm.isSameNode(e.target) && this.clickEvent.timeStamp !== e.timeStamp;
    };

  }

  private onConfirmationResult(wasConfirmed: boolean) {
    if (wasConfirmed) {
      this.nativeElement.dispatchEvent(this.clickEvent);
    }
    this._reset();
  }

  private _reset() {
    this.clickEvent = null;
    this.isActive = false;
  }

  private initConfirmComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(ConfirmPopoverComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const componentInstance = <ConfirmPopoverComponent>componentRef.instance;

    componentInstance.confirm = this.confirm;
    this.popover = componentInstance.confirmTemplate;
    this.containerClass = 'modal-sm'; // make the popup wider with help of bootstrap's class
    componentInstance.callback = (wasConfirmed) => {
      this.onConfirmationResult(wasConfirmed);
      this.hide();
    };
  }
}
