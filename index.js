// Implement the Car class that follows the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of Car and call the start method
var myCar = new Car("Honda", "Civic", 2020);
myCar.start(); // Output: Car engine started
