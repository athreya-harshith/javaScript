console.log("this prints all the links that includes some text in it")

let a =document.links;
Array.from(a).forEach(function(ele)
{
    if(ele.href.includes('tube'))
        console.log(ele);
})
// challenge 1 done