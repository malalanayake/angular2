import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import {Magazine} from "./magazine/magazine.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations:  [ Magazine ],
  bootstrap:     [ Magazine ]
})
export class AppModule { }
