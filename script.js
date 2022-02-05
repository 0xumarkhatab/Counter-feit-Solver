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

function extractInfo(p) {
  let arr = Array.from(p.hash.hashed);
  let name = "",
    price = "",
    serialNumber = "",
    date = "";
  let i = 0;
  for (i; arr[i] != "_"; i++) {
    if (arr[i] != "$") name += arr[i];
  }
  i++;
  for (i; arr[i] != "_"; i++) {
    price += arr[i];
  }

  i++;
  for (i; arr[i] != "_"; i++) {
    serialNumber += arr[i];
  }
  i++;
  for (i; i < arr.length; i++) {
    date += arr[i];
  }

  price = Number(price);
  date = Number(date);
  const obj = {
    name: name,
    price: price,
    serialNumber: serialNumber,
    date: date,
  };

  return obj;
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

console.log("Extracting Information");

console.log(extractInfo(perfume));
