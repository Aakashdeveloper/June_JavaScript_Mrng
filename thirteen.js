for
while
do while
for of
for in {objects}
///////////
Map
filter 

//////////
for(i=0;i<5;i++){
    console.log(i)
}
0
VM191:2 1
VM191:2 2
VM191:2 3
VM191:2 4

var city = ["Delhi", "Prais", "Venice", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city =["Delhi","London","Newyork",[1,2,3],"Tokyo","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

for(i=0;i<10;i++){
    for(j=0;j<i;j++){
        console.log(j)
    }
}

var city =["Delhi","London","Newyork",[1,2,3],"Tokyo","Amsterdam"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

Delhi
London
Newyork
1
2
3
Tokyo
Amsterdam


////////WHILE/////////
var i = 0;
while(i<10){
console.log(i);
i++
}

////////DO WHILE/////////
var i = 0;
do{
    console.log(i);
    i++
}
while(i<10)




////////WHILE/////////
var i = 10;
while(i<5){
console.log(i);
i++
}

////////DO WHILE/////////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)


/////for of//////
var colors = ["red","yellow","green"]
for(color of colors){
    console.log(color)
}

for(abc of colors){
    console.log(abc)
}