interface Bookable2{
    availableDates: [Date];
}

interface Cancelable2{
    cancelationFee: number;
}

class Product3{
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


class Tour3 extends Product3 implements Bookable2, Cancelable2{
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

function cancelBookingGenerics<T extends Cancelable2 & Product3>(c: T){
    console.log("Canceling: %s (%d)", c.title, c.id)
    console.log("Price: %d", c.price);
    console.log("Cancelation fee: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price- c.cancelationFee);
}

var t = new Tour3(1, "8 hours");
t.title = "Trip to FHLBDM";
t.price = 1200;
t.cancelationFee = 100.00;

cancelBookingGenerics(t);