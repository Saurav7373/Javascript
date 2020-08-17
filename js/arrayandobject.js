let marks = [34,44,34,56,45];
const fruit = ['apple','mango'];
const mixed = ['str',89,[3,5]];

const arr = new Array(23,333,'pineapple');

console.log(arr);
console.log(mixed);
console.log(marks);
console.log(fruit[1]);
console.log(arr.length);
console.log(Array.isArray('sss'));
 
arr[0] = 'saurav';
let arrelement = arr[0];

console.log('element :', arrelement);
console.log(arr);

let value = marks.indexOf(56);
console.log(value)

// Mutating or Modifying arrays
marks.push(3564);
marks.unshift(1009);
marks.pop()
marks.shift()
marks.splice(2, 3);
marks.reverse()
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    'first name': 'SAurav', 
    channel: 'sauravcode',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)
           
