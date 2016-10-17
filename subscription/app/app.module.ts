import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FancyText} from "./fancyText/fancyText.component";
import {FancyCheckbox} from "./fancyCheckbox/fancyCheckbox.component";
import {SubscriptionForm} from "./subscriptionForm/subscriptionForm.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations:  [ SubscriptionForm,FancyText, FancyCheckbox ],
  bootstrap:     [ SubscriptionForm]
})
export class AppModule { }
