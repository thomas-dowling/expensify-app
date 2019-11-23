// OBJECT DESTRUCTURING
// const person = {
//     name: 'Tom',
//     age: 24,
//     location: {
//         city: 'Manchester',
//         temp: 50
//     }
// }

// const { name = 'Anonymous', age } = person;
// const { city, temp } = person.location;
// // const name = person.name
// // const age = person.age

// console.log(`${name} is ${age} years old`)

// console.log(`${city} is ${temp} degrees`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);


// ARRAY DESTRUCTURING
const address = ['27 Lime Stree', 'Manchester', 'England', 'TM5422'];
const [ , city, state = 'New York' ] = address;
console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];
const [ size, smallPrice, mediumPrice, largePrice] = item;
console.log(`A Medium ${size} costs ${mediumPrice}`)