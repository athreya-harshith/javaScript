console.log('This regarding DOM ')

let a = document;
console.log(a);
a= document.all;
console.log(a);
// the below will convert the a as an array helps us to use the method forEach on it
// Array.from(a).forEach(function(elements)
// {
//     console.log(elements)
// })
console.log(typeof a);
a = document.links[0].href
console.log(a)