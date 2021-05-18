class Vehicle {
  protected drive(): void {
    console.log('Vroom vroom chugga choo');
  }
}
const vehicle = new Vehicle();

class Car extends Vehicle {
  // private drive(): void {
  //   console.log('Just car sounds');
  // }

  startDrivingProcess(): void {
    this.drive(); //works bc refs other class mthd. If override method, cannot change modifier. Why is it overriding the method specifically that makes it angry about modifiers? If you can override the method, why not override the modifiers? Because of situations like this: https://stackoverflow.com/questions/6236909/why-cant-we-change-access-modifier-while-overriding-methods-in-c

    //Use protected to allow classes to be called within their own classes and in child classes, but not outside.
  }
}

const car = new Car();

car.drive(); //doesn't work, bc private
