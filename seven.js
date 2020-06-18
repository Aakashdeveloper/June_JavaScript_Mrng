if(){

}else{

}

///Odd Even
var a = 10
if(a%2==0){
    console.log('Number is even')
}else{
    console.log('Number is odd')
}

var a = 33
if(a%2==0){
    console.log('Number is even')
}else if(a%3==0){
    console.log('Number is divisible by 3')
}else{
    console.log('Number is odd')
}


var a = 33
if(a%2==0){
    console.log('Number is even')
}if(a%3==0){
    console.log('Number is divisible by 3')
}else{
    console.log('Number is odd')
}

//Any one out of condition match than use "or"
var num = 21

if(a%2==0){
    console.log('Number is even')
}else if(a%3==0 || a%5==0){
    console.log('Number is divisible by 3 or 5')
}else{
    console.log('Number is odd')
}


//If all condition match than use "and"
var num = 15

if(num%2==0){
    console.log('Number is even')
}else if(num%3==0 && num%5==0){
    console.log('Number is divisible by 3 or 5')
}else{
    console.log('Number is odd')
}

///////
var num = 21

if(a%2==0){
    console.log('Number is even')
}else if(a%3==0 || a%5==0){
    if(a%3==0){
        console.log('Number is divisible by 3')
    }else{
        console.log('Number is divisible by  5')
    }
}else{
    console.log('Number is odd')
}


//////////////
var a = 0
if(a){
    console.log("Hi to first")
}else{
    console.log("Hi to second")
}

var a = 1
if(a){
    console.log("Hi to first")
}else{
    console.log("Hi to second")
}


var a = -1
if(a){
    console.log("Hi to first")
}else{
    console.log("Hi to second")
}
VM261:4 Hi to first
undefined

var a = ''
if(a){
    console.log("Hi to first")
}else{
    console.log("Hi to second")
}
VM268:6 Hi to second
undefined

var a = null
if(a){
    console.log("Hi to first")
}else{
    console.log("Hi to second")
}
VM280:6 Hi to second
undefined

var a = undefined
if(a){
    console.log("Hi to first")
}else{
    console.log("Hi to second")
}
VM292:6 Hi to second

/////truthy & falsy
thruty>>>>> 1,2,-1,-3,'fff',true
falsy> 0,null,undefined,false,''


var a = true
if(!a){
    console.log('Hii javascript')
}else{
    console.log('bie javascript')
}


//////Ternery operator
var a = 10;
a>10?"first":"second"

var a = 10;
a>10?"first":"second"
"second"
var a = 10;
a==10?"first":"second"
"first"


var a = 10;
a>10?a+1:a-1


var a = 10;
a>10?a+1:a-1
9
var a = 9;
a>10?a+1:a-1
8
var a = 11;
a>10?a+1:a-1
12

a>10?true:false?"hii":"bie"
var a = 10;
a>10?a+1:a-1
9
var a = 9;
a>10?a+1:a-1
8
var a = 11;
a>10?a+1:a-1
12
a>10?true:false?"hii":"bie"
true