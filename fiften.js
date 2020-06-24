/*function greet(){
    console.log("hiiiii")
}

greet()*/


(function(){
    console.log("hiiiii")
}())


////////////////////
function looping(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

function * looping(userinput){
    for(i=0;i<userinput;i++){
        yield i
    }
}
undefined
looping(5)
looping {<suspended>}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}