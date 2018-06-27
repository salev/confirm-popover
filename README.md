# SLV Confirmation Popopver (Angular 5)

### [Example](salev.github.io/angular/slv-confirm-popopver.html)

The __slv-confirm__ directive can be placed on anything that also has __(click)__ event binding.

The directive just interrupts click event and shows a confirmation popover.

After confirmation it passes the click event further otherwise it stops the event

_(It works similar to [this](http://jameskleeh.com/angular-confirm/) previous AngularJS version directive)_

### Dependences

This code uses the following widely used packages:

1. Bootstrap 3 or 4 (CSS of button, dialog).

2. ngx-bootstrap (its popover).

3. Font Awesome.

### Usage

- Use confirm-popover.module.ts to incorporate the directive into your application.
- Add __slv-confirm__ attribute to link / button which removes an object.
```js
<button (click)="deleteFoo()" slv-confirm="To delete foo?">Delete</button>
```

Because the directive is based on ngx-bootstrap popover, it supports all its options, like placement.

_Note: if host of your delete link/button is a popover too then
use <code>@Input('isHostHidden')</code> to close the confirmation popover as well._ 
