export class Employee {
  constructor(options) {
    this.name = options.name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}


export class Manager extends Employee {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.departament = options.departament;
  }
  displayInfo() {
    console.log(`Name: ${this.name}
Departament: ${this.departament}`);
  }
}


