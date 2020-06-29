var movie1name
var movie1rating

var movies = {
    name:'Avengers',
    rating:4.4,
    language:'English'
}

undefined
typeof(movies)
"object"
movies.namee
undefined
movies.name
"Avengers"
movies.rating
4.4
movies.genre="Action"
"Action"
moviess
VM567:1 Uncaught ReferenceError: moviess is not defined
    at <anonymous>:1:1
(anonymous) @ VM567:1
movies
{name: "Avengers", rating: 4.4, language: "English", genre: "Action"}
movies.rating=4.6
4.6
movies
{name: "Avengers", rating: 4.6, language: "English", genre: "Action"}
delete movies.language
true
movies
{name: "Avengers", rating: 4.6, genre: "Action"}
movies['name']
"Avengers"
movies['language']
undefined
movies['rating']
4.6


var movies = [
    {
        name:'Avengers',
        rating:4.4,
        language:'English'
    },
    {
        name:'Death Racw',
        rating:3.4,
        language:'English'
    },
    {
        name:'Big Hero',
        rating:4.8,
        language:'English'
    }, 
    
]

movies[1].name="Death Race"
"Death Race"

var sayHi = {
    firstName:'Alvin',
    lastName:'Zoe',
    greet:function(){
        return `Say Hi to everyone`
    }
}

sayHi
{firstName: "Alvin", lastName: "Zoe", greet: ƒ}
sayHi.firstName
"Alvin"
sayHi.lastName
"Zoe"
sayHi.greet()
"Say Hi to everyone"

var calc ={
    sum:(a,b) => {return a+b},
    sub:(a,b) =>{return a-b}
}


calc.sum(3,4)
7
calc.sub(3,4)
-1


var dbquery={
    find:(table) => { return `Select * from ${table}`},
    insert:(table,dataObj) => {return `Insert into ${table} name,city VALUES(${dataObj.name},${dataObj.city})`}
}

dbquery.find('Employee')
"Select * from Employee"
dbquery.insert('student',{name:'John',city:'Boston'})
"Insert into student name,city VALUES(John,Boston)"