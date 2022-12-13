/*
    The string methods

    let str = "A String in javaScript"

    the associated methods on obj str is
    str.length
    str.concat()
    str.toUpperCase()
    str.toLowerCase()
    str.indexOf('String') // String is a substring
    returns 2 the first occurance
    str.lastIndex() check this returns the last occurance 
    str.endsWith()
    str.substring()
    str.includes()
    str.slice(value)
        if the value is negative it takes from the last of the string

        if the value is positive it removes the value num of characters form the begining
    
    str.slice(value1 , value2)
        it returns the string in between the range of value1 and value2
    
    str.split(' ')
        it splits the string and returns the array of substrings where ever there is a space
        ['A', 'String', 'in', 'javaScript']

    str.replace('pattern1' , 'pattern2')
        replace the fist occurance of the pattern1 with the pattern2 

*/

let str = "A String in javaScript String"
console.log(str.slice(2))
console.log(str.lastIndexOf("String"))
console.log(str.slice(0,8))
console.log(str.length)
console.log(str.slice(-10))
console.log(str.split(' '))

let fr1 = "Orange "
let fr2 = "Apple"

let html = `Fruit name is ${fr1}
            <h1>This is Hemanth</h1>
            <p> The topper of the class</p>
            `
document.body.innerHTML=html// this is selecting the body of the html
/*
    The `` are called as the template literals 
    these can be used to have ' " " as a part if the strings

    Interpolation is done using ${variable}
*/