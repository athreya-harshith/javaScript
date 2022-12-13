console.log('This is Functions and scope ')

function greet(name, thanks="Thanks a lot")
{
    console.log(`greetings for ${name} hdasfhkfhf fjhfhjf ${thanks}`)

    return 1;
}


const mygreet =function (name, thanks="Thanks a lot")
{
    console.log(`greetings for ${name} hdasfhkfhf fjhfhjf ${thanks}`)

    return 2;
}
let ret = greet('Athreya');
console.log(ret)
 
ret = mygreet('Harshith')
console.log(ret)


/*
    var has ablock level scope
    let and const has full script scope
*/

let i = 234
console.log(i)
sam()
// function sam()
// {
//     i = 9
        // this code withou any prefix (let , var)
        // modifies the global value
//     console.log(i+"In the function scope")
    
// }
// console.log(i)

function sam()
{
    var i = 9// this wont affect the global value
    let z = 10
    console.log(i+"In the function scope")
}
console.log(i)
// console.log(z) cause errors