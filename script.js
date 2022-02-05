document.write("Hello World");

//  Make Secen Nodes

// Medicines/Shoes/Perfumes are products

function generateSerialNumber() {
  return parseInt(Math.random() * 100000);
}

class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.date = Number(new Date());
    this.serialNumber = generateSerialNumber();
  }
}

const perfume = new product("Blue", 23);
