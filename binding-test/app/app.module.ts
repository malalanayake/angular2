import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HtmlEditor} from "./htmlEditor/htmlEditor.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations:  [ HtmlEditor ],
  bootstrap:     [ HtmlEditor ]
})
export class AppModule { }
