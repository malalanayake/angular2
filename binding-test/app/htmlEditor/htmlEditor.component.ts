
import {Component} from "@angular/core";
@Component({
    selector: "html-editor",
    template:
        `<textarea [(ngModel)]="userInput" rows="5" cols="40"></textarea>
        <h4>Preview</h4>
        <div [innerHTML]="userInput"></div>
`
})

export class HtmlEditor{
    userInput = "Enter HTML here";
}
