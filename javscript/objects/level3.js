// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'

function getAgeGroup(person) {
    if (person.age >= 0 && person.age <= 12) {
        return 'Child';
    } else if (person.age >= 13 && person.age <= 19) {
        return 'Teen';
    } else if (person.age >= 20 && person.age <= 59) {
        return 'Adult';
    } else {
        return 'Senior';
    }
}

const person1 = { name: 'John', age: 30 };
console.log(getAgeGroup(person1)); 


// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };

function getitems(a)

{
    return a.apples+a.bananas+a.oranges
}
console.log(getitems(inventory2))

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };

function stu(a){

     return Object.values(a);
}
console.log(stu(students3));

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true

const details4 = { name: 'John', age: 25, city: 'New York' };
function check(a) {
    if (a.name !== undefined && a.age !== undefined && a.city !== undefined && 
        a.name !== null && a.age !== null && a.city !== null) {
        return true;
    } else {
        return false;
    }
}


console.log(check(details4));



// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };


function avg(a)
{

    return (a.product1.price+a.product2.price+a.product3.price)/3;
}
console.log(avg(products5))


// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };

function highScore(a) {
    if (a.math > a.science && a.math > a.english) {
        return a.math;
    } else if (a.science > a.math && a.science > a.english) {
        return a.science;
    } else {
        return a.english;
    }
}

console.log(highScore(scores6)); 


// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };

function emp(a)
{
    return (a.emp1.salary+a.emp2.salary+a.emp3.salary)/3
}
console.log(emp(employees7))



// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };



function asc(a) {
    let arr1 = Object.values(a);
    return arr1.sort();
}
console.log(asc(data8));



// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };

function cost(a)
{
    return a.quantity*a.price
}
console.log(cost(order9))


// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };

function expenses(a)
{
    return a.rent+a.groceries+a.utilities+a.entertainment
}
console.log(expenses(expenses10))