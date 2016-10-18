import { Component, Input } from '@angular/core';
import { FancyText } from '../fancyText/fancyText.component';
import { FancyCheckbox } from 
  '../fancyCheckbox/fancyCheckbox.component';

@Component({
    moduleId: module.id,
    selector: "subscription-form",
    templateUrl: "subscriptionForm.component.html"
})  

export class SubscriptionForm {
	@Input() interests:[string]
}