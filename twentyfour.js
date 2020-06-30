function human(name){
    this.name = name;
    this.city = "Newyork"
}

function robot(name){
    this.name = name;
    this.legs = 2
    this.color="red"
}

var john = new human('John');
var pepper = new robot('Pepper')
john
human {name: "John", city: "Newyork"}
pepper
robot {name: "Pepper", legs: 2, color: "red"}

human.prototype = new robot()
var john = new human('John');
human {name: "John", city: "Newyork"}
john.legs
2
john.color
"red"