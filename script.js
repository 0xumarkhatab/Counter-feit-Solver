document.write("Hello World");

//  Make Secen Nodes

// Medicines/Shoes/Perfumes are products
function cypherText(name) {
  let cyphered = "";
  for (x of name) {
    cyphered += x + "$";
  }
  console.log("cyphered", cyphered);
  return cyphered;
}

//______________________Hashing Functions_____//

function extractPrice(p) {
  let arr = Array.from(p.hash.hashed);
  let price = "";
  let i = 0;
  for (i; arr[i] != "_"; i++) {}
  i++;
  for (i; arr[i] != "_"; i++) {
    price += arr[i];
  }
  console.log(Number(price));
}

function hashEquality(h1, h2) {
  if (h1) {
  }
}

//_________________________________________//

function encode(name, price, date, serialNumber) {
  const content =
    cypherText(name) + "_" + price + "_" + date + "_" + serialNumber;
  const element = {
    hashed: content,
    type: "endcoded",
  };
  return element;
}

function decode(name, date, serialNumber) {}

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
  isEqual(theProduct) {
    return 1;
  }
}

const perfume = new product("Blue", 23);

console.log(perfume);

console.log("Extracting Price");
extractPrice(perfume);
