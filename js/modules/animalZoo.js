export class AnimalZoo {
  static #MAX_AGE = 20

  constructor(options) {
    this.name = options.name;
    if(options.age > AnimalZoo.#MAX_AGE) {
      throw new Error("The animal's age exceeds the maximum age")
    } else {
      this.age = options.age
    }
    this.gender = options.gender;
  }

  changeName(newName) {
    this.name = newName;
  }

  changeAge(newAge) {
    this.age = newAge
  }
}
