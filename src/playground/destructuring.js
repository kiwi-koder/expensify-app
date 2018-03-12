//
// Object destructuring
// console.log('destructuring.js');

// const person = {
//     name: 'Josh',
//     age: 24,
//     location: {
//         city: 'London',
//         temp: 92
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name : 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , city, state = 'New York' ] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2,00', '$2.50', '$2.75'];

const [ type, , mediumPrice] = item
console.log(`A medium ${type} costs ${mediumPrice}`);