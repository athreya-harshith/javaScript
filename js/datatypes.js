/*
    Data Types in js

    1. Primitive DataTypes storage area stack
            1.String
            2.Numbers
            3.Boolean
            4.Null
            5.Undefined
            6.Symbol intro in es6
    2. Non Primitive Data Types storage area heap
        1.Arrays
        2.Obects
        3.Functions
        4.Dates
    */

var nm = 'Athreya'
console.log("My Name is "+nm)
console.log("The DataType is "+(typeof nm))

let marks = 40;
console.log("the marks "+marks)
console.log('Type of marks is '+(typeof marks))

let istrue = true

console.log("The DataType is "+(typeof istrue))

let udef;

console.log("The DataType is "+(typeof udef))

let nullVar = null
console.log("The DataType is "+(typeof nullVar))


// Reference Object

let myarr  = [10,20,40,'ghello',false]
console.log("The DataType is "+(typeof myarr))

let stmark ={
    athreya :40,
    hasha:50
}

console.log("The DataType is "+(typeof stmark))

console.log(stmark)

function mk(){}
console.log("The DataType is "+(typeof mk))
