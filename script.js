function Phone(brand, price, color, memory) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + this.brand + " has " + this.memory + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "32 GB");
var SamsungS6 = new Phone("Samsung", 889, "black", "32 GB");
var Asus3 = new Phone("Asus", 599, "titan gray", "32 GB");

iPhone6S.printInfo();
SamsungS6.printInfo();
Asus3.printInfo();