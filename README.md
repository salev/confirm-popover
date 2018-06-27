# confirm-popover
## SLV Confirmation Popopver (Angular 5)

[Example](salev.github.io/angular/slv-confirm-popopver.html)

The __slv-confirm__ directive can be placed on anything that also has __(click)__ event binding.

The directive just interrupts click event and shows a confirmation popover.

After confirmation it passes the click event further otherwise it stops the event

_(It works similar to [this](http://jameskleeh.com/angular-confirm/) previous AngularJS version directive)_

###Dependences

This code uses the following widely used packages:

1. Bootstrap (3 or 4)

2. ngx-bootstrap

3. Font Awesome


_Note: if host of your delete link/button is a popover too then
use <code>@Input('isHostHidden')</code> to close the confirmation popover as well._ 
