console.log('this is window object')
/*
    window object is a global object in js 
    hence we can use window.alert() or else
    we can ues alert()

    window object has many methods , in it 
    its being displayed by the console.log(a)
*/
// let a = window
// window.alert('Hello alert uses window.alert')
// alert('This doesnot use window. it just calls only alert()')
// let b = prompt('Type your name')
// console.log(a)
// console.log(b)
// b = confirm('Do you want to cintinue')
// console.log(a)

let a = window.document
console.log(a)

/*
    some more things
    window.innerHeight
    window.innerWidth

    window.scrollX
    wondow.scrollY
    

    location.reload()
*/
let b = location
console.log(b)
let c = location.toString()
console.log(c)
// location.reload()

let d = window.history

console.log(d)