document.write(
  "<h1>CounterFeit Problem Solution</h1> <p>using Blockchain Ethics and power of Javascript</p>"
);

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

//__________________Intuition of comparison of objects/products
// We are testing the priorness of a product
// by it's date stamp
// the date is converted into javascript epoche
//

//  ___________ Functioning____________

// if h1 is greater -> return 1
// if h1 is lesser -> return -1
// if both are equal -> return 0

// 0 means equal(manufactured at same time)
// 1 means first is greater(product is made after)
// -1 means first is lesser(product is made first)

function hashEquality(h1, h2) {
  if (extractInfo(h1).date === extractInfo(h2).date) {
    return 0;
  } else if (extractInfo(h1).date > extractInfo(h2).date) {
    return 1;
  } else if (extractInfo(h1).date < extractInfo(h2).date) {
    return -1;
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

const perfume1 = new product("Blue", 23);
const perfume2 = new product("Blue", 23);

console.log(perfume1);
console.log(perfume2);
console.log(
  "\t\tTesting Fungibility\n0 means equal\n1 means first is greater(first product is made after)\n-1 means first is lesser(first product is made first)\n\n\n"
);

class person {
  constructor(id) {
    this.id = id;
    this.products = [];
  }

  askPermission() {
    console.log("Person ", this.id, "asking for permision to add product");
  }
  givePermission() {
    console.log("Person ", this.id, "giving permision to add product");
  }
}
let Pool = [];

function MakePool() {
  for (let i = 1; i <= 7; i++) {
    Pool.push(new person(i));
  }
}
MakePool();
Pool[3].askPermission();
