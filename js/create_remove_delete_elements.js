console.log('to create remove and delete elements in js')

/*
    creating a node 
*/

// here we are creating an li and adding that to the ul

let ele = document.createElement('li')
let text = document.createTextNode('This text is appended by javascript')
// ele.innerText = "This is appended by javascript"
ele.appendChild(text)

//we can either use any of the above mentioned onessss
ele.className="childul"
ele.setAttribute('title','mytitle')
console.log(ele)

let parele = document.querySelector(".list")
parele.appendChild(ele)

/*
    over all flow of the above one is 
    1. Create an new element to add
    2.create a text node to be added to the newly created element

    3. set the attributes , class , id of the newly created element

    4. select the parent to add the newly created element
    5. append the new element to the parent

*/

/* THIS IS ON REPLACING THE ELEMENTS */

let replace_ele = document.createElement('h2')
let replace_ele_text = document.createTextNode("This the replaces contents")
replace_ele.id = "ele2"
replace_ele.className= "ele2"
replace_ele.appendChild(replace_ele_text)
console.log(replace_ele)
// here the ele is an object of newly created li element
ele.replaceWith(replace_ele)
// the aboe code replaces the li with h3 


// the great part is we can even replace the child nodes

// replacing the child elements for this first select the parent element

let par_ele = document.getElementById("myul")
// the syntax herre is first the new element to add and the element to be replacedss
par_ele.replaceChild(ele, document.getElementById("fui"))

//  rmoving the child
par_ele.removeChild(document.getElementById("lui"))

// for the better understanding comment out and understand from the beginning

/*
    SOME MORE FUNCTIONS

    element.hasAttribute() -> returns boolean values
    element.removeAttribute() -> remove the attribute
*/