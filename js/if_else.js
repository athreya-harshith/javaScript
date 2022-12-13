console.log("If else tutorials")
/* 
  == compare value
  === to compare equality of both value and type

  lly != and !==

  Terneray (val1 == val2 ?Epression1:Expression2)
*/
let age = '19' 

if( age == 19)
{
    console.log('age is 19 only value is matched ')
}
if( age === 19)
{
    console.log('Age value and type is matched')
}

if(age !== 19)
{
    console.log('Ages Type and value is not matched')
}
let s = `hello ${age}`
if( age !== 25)
{
    console.log('Type and value are not match ${age}')
    console.log(s)
}
let var1 = 2

// if(var1)
// {
//     console.log('Var1 is defined')
// }

if(typeof var1 === 'undefined')
{
    console.log('not defined')
}
else
{
    console.log('defined')
}

console.log((age == 12)? 'Age is 12':'Age is not 12')

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/