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
//objects
var babe = {
    name: 'mario',
    belt: 'black',
    age: 40
};
