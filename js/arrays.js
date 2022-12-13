const fr =['orange','yyy','zzzzz']
const num=[12,232,234234,445]
const mix = [1,'sadf',34.3434]

console.log(fr)
console.log(num)
console.log(mix)

// arrays have methods and properties
/*
    arr.length->property

    arr.indexOf()
    returns the index of the element

    Modifying or mutating the array
    adding and removing the values to the end
    arr.push(value)
    arr.pop() -> irrespective of the argument passend it removes the value from the end

    Adding and removing to front
    arr.unshift(values)-> add the value to front of the array

    arr.shift() -> remove from the front


    const arr = new Array(elementsOfArray)
    Array.isArray()

    arr.splice(start_index, howManyelements to remove)

*/
console.log(num.push(121))
console.log(num.push(122))
console.log(num)
num.pop()
console.log(num)
num.pop(445)
console.log(num)

num.unshift(000)
console.log(num)
console.log(num.shift())
console.log(num)

let ind = num.indexOf(232)

console.log(ind)