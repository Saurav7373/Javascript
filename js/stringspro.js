const name = 'saurav';

const gretting = 'good morning';

// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is my Js practice </h1>"+
        "<p> this is My practice</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);


// indexing 

console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
// array form maa aauxa 
console.log(html.split('>'));


//  only for first occurance
console.log(html.replace('this', 'it'));

let fruit1 = 'Mango';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" JS practice </h1>
            <p> I like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;            
