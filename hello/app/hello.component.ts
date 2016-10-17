import { Component } from '@angular/core';
@Component({
  selector: 'hello',
  template: '<h1>I say:{{message}}</h1>'
})
export class HelloComponent { 
	message: string = "FHLB App devs"
}
