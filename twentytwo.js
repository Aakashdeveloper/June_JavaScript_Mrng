var firstname = "Alvin"
var lastname = "Zoe"

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet: function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

sayhi
{firstname: "John", lastname: "Ammy", greet: ƒ}
sayhi.greet()
"Say Hi to Alvin Zoe"

sayhi.greet() //afterr using this operator
"Say Hi to John Ammy"

/////////////
var bob = new Object()
bob.age = 10
bob.city= "London"

"London"
bob
{age: 10, city: "London"}
var tony = new Object()
tony.age = 20
tony.city= "Boston"
"Boston"
tony
{age: 20, city: "Boston"}
tony.age
20
tony['age']
20



var bob = new Object()
bob.age = 10
bob.city= "London"
bob.setAge = function(newAge){
    this.age = newAge
}

var tony = new Object()
tony.age = 20
tony.city= "Boston"
tony.setAge = function(newAge){
    this.age = newAge
}

bob.age
10
bob.setAge(22)
undefined
bob
{age: 22, city: "London", setAge: ƒ}

var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object()
bob.age = 10
bob.city= "London"
bob.setAge = createAge

var tony = new Object()
tony.age = 20
tony.city= "Boston"
tony.setAge = createAge

bob.age
10
bob.setAge(23)
undefined
bob
{age: 23, city: "London", setAge: ƒ}
tony
{age: 20, city: "Boston", setAge: ƒ}
tony.setAge(24)
undefined
tony
{age: 24, city: "Boston", setAge: ƒ}