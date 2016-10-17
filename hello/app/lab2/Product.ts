import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

export class Product{
    title: string;
    price: number;
    id: number;

    constructor(id:number){
        this.id =id;
    }

    printDetails(){
        console.log(`Title: ${this.title}`);
        console.log(`ID : ${this.id}`)
        console.log(`Price : ${this.price}`)
    }
}


export class Tour extends Product{
    duration: string;

    constructor(id:number, duration:string){
        super(id);
        this.duration=duration;
    }

    printDetails(){
        super.printDetails();
        console.log(`Duration: ${this.duration}`)
    }
}


function  test(p:Product){
    p.printDetails();
}

var t1: Tour;
t1 = new Tour(1, "8 hours");
t1.title = "Trip to FHLBDM";
t1.price = 1200;

test(t1);