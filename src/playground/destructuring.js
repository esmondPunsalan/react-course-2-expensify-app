//
// Object destructoring
//

/*
const person = {
    age: 49,
    location: {
        city: 'South City',
        temp: '92'
    }
}

const { name: firstName = "Anonymous", age, location } = person;
console.log(`${firstName} is ${age}`);
const { city, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${city}.`);
*/

/*
const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penquin"
    }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);
*/

//
// Array destructoring
//

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
const [street, city, state, zip] = address;

console.log(`You are in ${state}.`);

const item = ["Coffee (ice)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);