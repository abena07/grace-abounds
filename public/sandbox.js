"use strict";
var circumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(circumference(2.9));
//arrays
var people = ['luigi', 'mario', 'yoshi'];
people.push('toad');
// you can only add a different type when you declare an array with a different types
var mixed = ['cat', 7, 19, 'dog', 9, 'mouse'];
mixed.push('goat');
mixed[1] = "bark";
//union types
var mix = [];
mixed.push('hello');
mixed.push(20);
var uid;
uid = '123';
uid = 223;
//objects but with objects you can also specify what type they shuld be 
var babe = {
    name: 'mario',
    belt: 'black',
    age: 40
};
/// there is also an any type..
var age = 25;
age = true;
console.log(age);
//so when you set an object to any you can push any data type in that array and the same for objects
//with declaring a value you use the colon cos you are assignin it
var ninja;
ninja = { name: 24, age: "yoshi" };
console.log(ninja);
//functions
var greet;
greet = function () {
    console.log("hello, again");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 19);
///you can return a data type manually 
var minus = function (a, b) {
    return (a + b);
};
//const logDetails =(uid:SrtringOrNum, item:string)=>{
// console.log(`$(item) has a uid of $(uid);`)
//}
//const greet = (user: objWithName) ={
// console.log(`$(user.name) says hello`)
//}
