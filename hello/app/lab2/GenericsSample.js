var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product3 = (function () {
    function Product3(id) {
        this.id = id;
    }
    Product3.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID : " + this.id);
        console.log("Price : " + this.price);
    };
    return Product3;
}());
var Tour3 = (function (_super) {
    __extends(Tour3, _super);
    function Tour3(id, duration) {
        _super.call(this, id);
        this.duration = duration;
    }
    Tour3.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour3;
}(Product3));
function cancelBookingGenerics(c) {
    console.log("Canceling: %s (%d)", c.title, c.id);
    console.log("Price: %d", c.price);
    console.log("Cancelation fee: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price - c.cancelationFee);
}
var t = new Tour3(1, "8 hours");
t.title = "Trip to FHLBDM";
t.price = 1200;
t.cancelationFee = 100.00;
cancelBookingGenerics(t);
//# sourceMappingURL=GenericsSample.js.map