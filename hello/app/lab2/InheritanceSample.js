"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product_1 = require("./Product");
var Tour2 = (function (_super) {
    __extends(Tour2, _super);
    function Tour2(id, duration) {
        _super.call(this, id);
        this.duration = duration;
    }
    Tour2.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour2;
}(Product_1.Product));
function cancelBooking(c) {
    console.log("Canceling booking. Charges: %d", c.cancelationFee);
}
var t = new Tour2(1, "8 hours");
t.title = "Trip to FHLBDM";
t.price = 1200;
t.cancelationFee = 100.00;
cancelBooking(t);
//# sourceMappingURL=InheritanceSample.js.map