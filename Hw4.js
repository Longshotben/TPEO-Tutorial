function Car(model, year, mpg){
    this.model = model;
    this.year = year;
    this.mpg = mpg;

}

var car1 = new Car("porsche", 2020, 25);
var car2 = new Car("toyota", 2022, 50);
var car3 = new Car("honda", 2022, 55);

console.log(car1.mpg);
console.log(car2.mpg);
console.log(car3.mpg);

// Vehicle Object needs to inherit car
function Vehicle(Car){
    this.Car = Car;
}

var Vehicle1 = new Vehicle (car1);
var Vehicle2 = new Vehicle (car2);
var Vehicle3 = new Vehicle (car3);

console.log(Vehicle1.Car.mpg);
console.log(Vehicle2.Car.mpg);
console.log(Vehicle3.Car.mpg);

