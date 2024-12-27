const user = {
    name: "Alex",
    age: 24,
    hobby: "reading",
    premium: true,
  };
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }

// --------------------------------------------

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user)); 

// --------------------------------------------

function findBestEmployee(employees) {
let maxTasks = 0;
let bestEmployee = "";
  
for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
    maxTasks = tasks;
    bestEmployee = employee;
}
}
  return bestEmployee;
}
  
const employees = {
Anna: 26,
David: 34,
Lisa: 39,
};
console.log(findBestEmployee(employees));

//-----------------------------------

function countTotalSalary(employees) {
    let totalSalary = 0;
  
for (const salary of Object.values(employees)) {
    totalSalary += salary;
    }
  
    return totalSalary;
}
  
const salaries = {
Anna: 5000,
David: 7000,
Lisa: 8000,
};
console.log(countTotalSalary(salaries));

// ---------------------------


function getAllPropValues(arr, prop) {
    const propValues = [];
  
for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
    propValues.push(obj[prop]);
    }
    }
    return propValues;
}

const products = [
    { name: "Laptop", price: 1000, quantity: 4 },
    { name: "Phone", price: 500, quantity: 10 },
    { name: "Tablet", price: 800, quantity: 5 },
  ];
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity")); 
  
//-------------------------------------------

function calculateTotalPrice(allProducts, productName) {
let totalPrice = 0;
  
for (const product of allProducts) {
    if (product.name === productName) {
    totalPrice = product.price * product.quantity;
    break;
}
}
    return totalPrice;
}
console.log(calculateTotalPrice(products, "Laptop"));
console.log(calculateTotalPrice(products, "Phone"))