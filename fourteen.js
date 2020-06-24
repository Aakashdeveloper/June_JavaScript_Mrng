function
methods
arrow function
IFFI
Gnerator function 

/////////////////
var a = 10
var b = 20
a+b

function add(a,b){
    return a+b
}

add(1,2)


function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add('a','b')
"ab"

/////////Function///////
function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = "number is even"
    } else{
        out = "number is odd"
    }  
    return out
}
isEven(4)
"number is even"
isEven(9)
"number is odd"


///////Method////////
var isEven = (userInput) => {
    var out;
    if(userInput%2==0){
        out = "number is even"
    } else{
        out = "number is odd"
    }  
    return out
}

isEven(45)
"number is odd"


//Es6///
//////////Arrow///
function add(a,b){
    return a+b
}

var add = (a,b) => { return a+b}


var isEven = (userInput) => {
    var out;
    if(userInput%2==0){
        out = `number ${userInput} is even`
    } else{
        out = `number ${userInput} is odd`
    }  
    return out
}

isEven(3)
"number 3 is odd"
isEven(22)
"number 22 is even"