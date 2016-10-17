"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product = (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID : " + this.id);
        console.log("Price : " + this.price);
    };
    return Product;
}());
exports.Product = Product;
var Tour = (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        _super.call(this, id);
        this.duration = duration;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour;
}(Product));
exports.Tour = Tour;
function test(p) {
    p.printDetails();
}
var t1;
t1 = new Tour(1, "8 hours");
t1.title = "Trip to FHLBDM";
t1.price = 1200;
test(t1);
//# sourceMappingURL=Product.js.map