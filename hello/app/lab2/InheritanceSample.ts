import {Product, Tour} from "./Product";

interface Bookable{
    availableDates: [Date];
}

interface Cancelable{
    cancelationFee: number;
}

class Tour2 extends Product implements Bookable, Cancelable{
    duration: string;
    availableDates : [Date];
    cancelationFee : number;

    constructor(id:number, duration:string){
        super(id);
        this.duration=duration;
    }

    printDetails(){
        super.printDetails();
        console.log(`Duration: ${this.duration}`)
    }
}

function cancelBooking(c:Cancelable){
    console.log("Canceling booking. Charges: %d", c.cancelationFee);
}


var t = new Tour2(1, "8 hours");
t.title = "Trip to FHLBDM";
t.price = 1200;
t.cancelationFee = 100.00;

cancelBooking(t);
