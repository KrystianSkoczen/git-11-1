function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungS6 = new Phone("Samsung", 889, "black");
var Asus3 = new Phone("Asus", 1340, "titan gray");

iPhone6S.printInfo();
SamsungS6.printInfo();
Asus3.printInfo();