const circumference = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circumference(2.9));

//arrays
let people = ['luigi', 'mario', 'yoshi']
people.push('toad')
// you can only add a different type when you declare an array with a different types
let mixed = ['cat', 7, 19, 'dog', 9, 'mouse']
mixed.push('goat')
mixed[1] = "bark"

//objects
let babe = {
    name: 'mario',
    belt: 'black',
    age: 40
}