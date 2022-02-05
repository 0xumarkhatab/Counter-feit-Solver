document.write(
  "<h1>CounterFeit Problem Solution</h1> <p>using Blockchain Ethics and power of Javascript</p>"
);

//  Make Secen Nodes
//__________________Random function ________

function generateRandInt(prec) {
  return parseInt(Math.random() * prec);
}

//___________________________________
// Medicines/Shoes/Perfumes are products
function cypherText(name) {
  let cyphered = "";
  for (x of name) {
    cyphered += x + "$";
  }
  return cyphered;
}

//______________________Hashing Functions_____//

function extractInfo(p) {
  let arr = Array.from(p.hash.hashed);
  let name = "",
    price = "",
    serialNumber = "",
    mfgTime = "";
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
    mfgTime += arr[i];
  }
  i++;
  for (i; i < arr.length; i++) {
    serialNumber += arr[i];
  }

  price = Number(price);

  mfgTime = Number(mfgTime);

  const obj = {
    name: name,
    price: price,
    serialNumber: serialNumber,
    mfgTime: mfgTime,
  };

  return obj;
}

//__________________Intuition of comparison of objects/products
// We are testing the priorness of a product
// by it's mfgTimestamp
// the mfgTimeis converted into javascript epoche
//

//  ___________ Functioning____________

// if h1 is greater -> return 1
// if h1 is lesser -> return -1
// if both are equal -> return 0

// 0 means equal(manufactured at same time)
// 1 means first is greater(product is made after)
// -1 means first is lesser(product is made first)

function hashEquality(h1, h2) {
  if (extractInfo(h1).mfgTime === extractInfo(h2).date) {
    return 0;
  } else if (extractInfo(h1).mfgTime > extractInfo(h2).date) {
    return 1;
  } else if (extractInfo(h1).mfgTime < extractInfo(h2).date) {
    return -1;
  }
}

//_________________________________________//

function encode(name, price, mfgTime, serialNumber) {
  const content =
    cypherText(name) + "_" + price + "_" + mfgTime + "_" + serialNumber;
  const element = {
    hashed: content,
    type: "endcoded",
  };
  return element;
}

function decode(name, date, serialNumber) {}

function generateSerialNumber() {
  return generateRandInt(10000);
}

class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.serialNumber = generateSerialNumber();
    this.mfgTime = Number(new Date());

    this.hash = encode(this.name, this.price, this.mfgTime, this.serialNumber);
  }
  isEqual(theProduct) {
    return 1;
  }
}
let TransactionLedger = [];

class person {
  constructor(id) {
    this.publicKey = id;
    this.privateKey = generateRandInt(1000);

    this.products = [];
  }
  addProduct(prd) {
    if (this.askPermission(this)) {
      this.products.push(prd);
      return true;
    } else {
      console.log("Permission denied");
      return false;
    }
  }
  printProducts() {
    for (x of this.products) {
      console.log(extractInfo(x));
    }
  }

  askPermission(prsn) {
    console.log(
      "Person ",
      this.publicKey,
      "asking for permision to add product\n\n"
    );

    let permision = true;

    for (let i = 0; i < Pool.length; i++) {
      if (this.publicKey === i) {
        continue;
      }
      if (Pool[i].givePermission(prsn) === false) {
        permision = false; //if even one of the participants did not allow
        // the transaction will not take place
        console.log("person ", i, "denied");
      } else console.log("person ", i, "agreed");
    }

    return permision;
  }
  givePermission(prsn) {
    console.log(
      "Person ",
      this.publicKey,
      "is considering permision to add product"
    );
    return true;
  }
  getPublicKey() {
    return this.publicKey;
  }
  broadcastTransaction(tran) {
    for (let i = 0; i < Pool.length; i++) {
      if (Pool[i].acceptTransaction(tran) === true) {
        console.log("\nTransaction Accepted\n");
        // delete from sender and credit to destination here
        break;
      }
    }
  }
  takeOwnerShip(tran) {
    this.products.push(tran.data);
    console.log(
      "\nAfter Addition of the Item, Person ",
      this.publicKey,
      " has Following Items\n"
    );

    this.printProducts();

    return true;
  }
  getItem(index) {
    return this.products[index];
  }
  removeItem(item) {
    let id = item.serialNumber;
    this.products = this.products.filter(
      (theItem) => theItem.serialNumber != id
    );
  }

  //attempting to accept transaction

  acceptTransaction(tran) {
    if (tran.destinationKey === this.publicKey) {
      console.log("Eligible to accept Transaction");
      return true;
    }
    return false;
  }
  sendItem(itemNo, dest_key) {
    let data = this.getItem(itemNo);
    if (data === undefined) {
      console.log(
        "\n\t\t-->>>Dangg !!Person ",
        this.publicKey,
        " does not have the item to transfer\n"
      );
      return false;
    }

    let destinationKey = dest_key;
    let sender = this.publicKey;
    let transaction = {
      data,
      destinationKey,
      sender,
    };

    this.broadcastTransaction(transaction);
    return true;
  }
}

let Pool = [];

function MakePool() {
  for (let i = 0; i <= 7; i++) {
    Pool.push(new person(i));
  }
}

MakePool();

function addProductToPerson(prd, prsn) {
  console.log(
    "\n\t\t_________________________________________\n\nPerson ",
    prsn.getPublicKey(),
    "wants to add product\n"
  );

  if (Pool[prsn.getPublicKey()].addProduct(prd) === true) {
    console.log("Product Added");
    console.log("\n\t\t___________________________________________\n");

    return true;
  }
  console.log("\n\t\t___________________________________________\n");

  return false;
}

let producNames = [
  "Blue Perfume",
  "Iphone",
  "Lenovo Laptop",
  "Samsumg Galaxy",
  "Panadol Tablets",
  "Omeprazole Tablet",
  "Product X",
  "Rolex Watch",
  "Kobe's Sign",
  "Infinix Smartphone",
];

for (let i = 0; i < Pool.length; i++) {
  let p_name = producNames[generateRandInt(10)];
  let p1 = new product(p_name, generateRandInt(100));
  addProductToPerson(p1, Pool[i]);
}

console.log("Printng Products");

for (let i = 0; i < Pool.length; i++) {
  const element = Pool[i];
  element.printProducts();
}

Pool[3].sendItem(0, 6);

Pool[1].sendItem(-1, 3);

Pool[0].sendItem(0, 5);
