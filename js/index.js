import { Employee, Manager } from "./modules/staff.js";
import {Order, Product} from './modules/orderList.js'
import { AnimalZoo } from "./modules/animalZoo.js";

// Задание 1
const employee = new Employee({
  name: "John Smith",
});

employee.displayInfo();

const manager = new Manager({
  name: "Jane Doe",
  departament: "Sales",
});

manager.displayInfo();

// Задание 2
const order = new Order(12345)
const product1 = new Product('Phone', 500)
order.addProducts(product1)

const product2 = new Product('Headphones', 100)
order.addProducts(product2)

console.log(order.getTotalPrice())

// Задание 3

const animal1 = new AnimalZoo({
  name: 'babushka',
  age: 10,
  gender: 'male'
})

console.log(animal1)
animal1.changeAge(18)
animal1.changeName('Tiger')
console.log(animal1)

const animal2 = new AnimalZoo({
  name : 'Pushok',
  age: 30,
  gender: 'male'
})

console.log(animal2)