import {Component} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: "magazine",
    templateUrl: "magazine.component.html"
})

export class Magazine{
    fullName = "";
    editions = [
        {editionCode:1, editionName: "US", price:"10.99 USD"},
        {editionCode:2, editionName: "Canada", price:"14.99 USD"},
        {editionCode:3, editionName: "International", price:"23.99 USD"}
    ]
    selecttedEdition = this.editions[0];
    selectedShipping = "";
    acceptPolicy = false;

    submitForm(){
        let requestData ={
            customerName: this.fullName,
            productCode: this.selecttedEdition.editionCode,
            acceptPolicy : this.acceptPolicy,
            shipMode: this.selectedShipping
        }
        alert(JSON.stringify(requestData));
    }
}