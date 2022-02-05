document.write("Hello World");

//  Make Secen Nodes

// Medicines/Shoes/Perfumes are products

class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.date = Number(new Date());
  }
}

const perfume = new product("Blue", 23);
