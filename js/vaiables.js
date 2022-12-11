//  variables in javaScrit

// var, let, const
var nm = 'Athreya'
console.log(nm)
var channel;
var marks = 50;
console.log(nm, channel, marks)
// rules for a valid identifiers holds the same
// can start with _ or $

// use of var has been reduced in modern javascript

// we can assign initialize and define a variable

// const will not allow to change if once set

// let :
/*
    var is a global scope 
    let has a block level scope

*/
var city='mysore'
{
    let city= ' banglore'
    console.log(city)
}

console.log(city)

const arr1 = [20,30,40,50,60]
console.log(arr1)
arr1.push(75)
console.log(arr1)
// arr1 = [25] not possible because of const keyword

/*
    common case types

    1.camelCase
    2.kebab-case
    3.snake_case
    4.PascalCase
*/