/* 
    All the looping constructs are similar to 
    those present in c

    for(let i =0;i<arr.length;i++)
    {
        //for body
    }

    arr.forEach(function(element))
    {
        console.log(element)
    }
    arr.forEach(function(element , index,array))
    {
        console.log(element, index,array)
    }

    for(val i in arr)
        console.log(i)
*/

let obj = {
    name:'athreya',
    age:20,
    height:5.11
}
for(var key in obj)
    console.log(`The Key is ${key} The Value is ${obj[key]}`)


const arr = [10,20,30,40,50,60]

arr.forEach(function(element){
    console.log(element)
});// VERY IMPORTANT
    