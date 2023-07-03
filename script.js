
//! Problem 1:=============================================

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) 
// console.log(otherRandomCar)

//? My Predictions: 
// console.log(randomCar) --> first car in the array will be listed 
// console.log(otherRandomCar) --> second car will be listed



//! Problem 2:=============================================
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// //? My Predictions: 
// console.log(name); --> error will show since otherName is now the way to access "name"
// console.log(otherName); --> otherName would now log 'Elon' since it replaced 'name'




//! Problem 3: =============================================
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// //? My Predictions: 
// console.log(password); --> will log '12345'
// console.log(hashedPassword); --> will show undefined since the property of password does not exist in person object



//! Problem 4:=============================================
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

//? My Predictions: 
// console.log(first == second); --> changes [3] from a value of 5 to become '2' --> false statement
// console.log(first == third); --> make [1] and [8] the same value, but they are already the same value of 2, so nothing changes --> true statement




//! Problem 5:=============================================
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);


//? My Predictions: 
// console.log(key); --> log 'value'
// console.log(secondKey); --> log the array: [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]); --> log '1'
// console.log(willThisWork); --> log '5'


