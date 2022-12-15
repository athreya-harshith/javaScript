console.log('Different element selectors in js')
/*
    Element selectors

    1.Single Element Selector
    2.Multiple element selector
*/
// The below are single element selector
let ele = document.getElementById("myfirst")
// ele= ele.className
// ele = ele.childNodes
// ele = ele.parentNode
ele.style.color = 'red';
ele.innerText='Hello inside the child div 1'
ele.innerHTML='<b?> this is emphasising the sentence </b?'
console.log(ele.innerHTML)
console.log(ele.innerText)
console.log(ele)

/*
    here we are using querySelector
    syntax
     document.querySelectors

*/

let sel = document.querySelector("#myfirst")
// sects the element with the id as myfirst

sel = document.querySelector(".child")
// selects the first element with the class .child

sel = document.querySelector("div")
// selects the first div tag 
sel.style.color = 'green'
// in the htl ve have two divs int the body only the first div is being selected from the querySelector

// multiple element selectors 

/*

    document.getElementsByClassName('Name of the class in string')
    document.getElementsByTagName('Name of the tag in string')

*/
sel = document.getElementsByClassName("child")
console.log(sel)
sel = document.getElementsByTagName("div")
console.log(sel)
// iterating over the elementsByTagName 

Array.from(sel).forEach(function(ele)
{
    console.log(ele)
    ele.style.color="blue"
})


const a = [10,20,30]
console.log(a)