export class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber
    this.products = []
  }

  addProducts (product) {
    this.products.push(product)
  }

  getTotalPrice () {
    return this.products.reduce((total, item) => total + item.price, 0)
  }
}

export class Product {
  constructor(name,price) {
    this.name = name
    this.price = price
  }
}