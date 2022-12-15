console.log('This is on parent children trtaversal in js')

/*
    here we are acessing the parent and children of an element through the built in functions
*/

let sel = document.querySelector(".container")
console.log(sel)

console.log(sel.childNodes)
// sel.childNodes lists out all the comments and also new lines as texts which is not needed usually 

console.log(sel.children)
//sel.childern wont return any comments and other new lines instead it only returns the child nodes (only return the html elements)

let nodename = sel.childNodes[0].nodeName
console.log(nodename)

let nodetype = sel.childNodes[0].nodeType
console.log(nodetype)
/*
    Node Type 
    1.element
    2.attribute
    3.Text Attribute
    8.Comment
    9.document
    10.DocType
*/
let contain = document.querySelector("div.container")
// console.log(contain)
// children always returns the elements
// console.log(contain.children[0])
// console.log(contain.children[1])
// first child is associated with the childNodes 
//hence it returns new lines and even comments as text 
console.log(contain.firstChild)
// firstElementChild returns the first html elements
// associated with the children
console.log(contain.firstElementChild)

// console.log(contain.lastChild)
console.log(contain.childNodes)

console.log(contain.lastElementChild)
console.log(contain.children)//counts the number of child node
console.log(contain.childElementCount)

console.log("concentrate from here")

console.log(contain)

console.log(contain.firstElementChild.parentElement)
console.log("Note the differernce between the above and below")
console.log(contain.firstElementChild.parentNode)

console.log(contain.firstElementChild.nextElementSibling)

console.log(contain.firstElementChild.nextElementSibling.nextElementSibling)
