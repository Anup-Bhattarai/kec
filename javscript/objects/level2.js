// Level 2 Questions

// Q1: Extract and return the 'firstName' and 'lastName' properties as a single string from the 'person' object.
// Expected output:
// 'John Doe'
const person1 = { firstName: 'John', lastName: 'Doe', age: 30 };
console.log(person1.firstName+' '+person1.lastName);


// Q2: Create a new object by merging the 'details1' and 'details2' objects.
// Expected output:
// { name: 'John', age: 25, city: 'New York', hobby: 'Soccer' }
const details1 = { name: 'John', age: 25 };
const details2 = { city: 'New York', hobby: 'Soccer' };
const combined = { ...details1, ...details2 };
console.log(combined);

// Q3: Add a new property 'quantity' with the value 10 to the 'product' object, if it doesn't already exist.
// Expected output:
// { name: 'Laptop', price: 800, quantity: 10 }
const product3 = { name: 'Laptop', price: 800 };
product3.quantity=10
console.log(product3);