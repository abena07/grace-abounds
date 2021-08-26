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

//union types
let mix: (string | number | boolean)[] = []
mixed.push('hello')
mixed.push(20)


let uid: string | number;
uid = '123';
uid = 223;
//objects but with objects you can also specify what type they shuld be 

let babe = {
    name: 'mario',
    belt: 'black',
    age: 40
}

/// there is also an any type..
let age: any = 25;
age = true
console.log(age)
//so when you set an object to any you can push any data type in that array and the same for objects
//with declaring a value you use the colon cos you are assignin it
let ninja: {
    name: any, age: any
}
ninja = { name: 24, age: "yoshi" }
console.log(ninja)

//functions
let greet: Function;

greet = () => {
    console.log("hello, again");

}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);


}

add(5, 19)

///you can return a data type manually 
const minus = (a: number, b: number): number => {
    return (a + b)
}