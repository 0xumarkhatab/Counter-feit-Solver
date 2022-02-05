document.write("Hello World");

//  Make Secen Nodes

// Medicines/Shoes/Perfumes are products

function encode(name, price, date, serialNumber) {
  const content = name + "_" + price + "_" + date + "_" + serialNumber;
  const element = {
    hashed: content,
    type: "endcoded",
  };
  return element;
}

function generateSerialNumber() {
  return parseInt(Math.random() * 100000);
}

class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.date = Number(new Date());
    this.serialNumber = generateSerialNumber();
    this.hash = encode(this.name, this.price, this.date, this.serialNumber);
  }
}

const perfume = new product("Blue", 23);
console.log(perfume);
