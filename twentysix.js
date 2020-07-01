var person = {
    fullname:function(city,country){
        return `${this.firstname} ${this.lastname} ${city} ${country}`
    }
    
}
var john = {
    firstname:'John',
    lastname:'Eva'
}

person.fullname.call(john,'Delhi','India')
"John Eva Delhi India"
person.fullname.call(john,['Delhi','India'])
"John Eva Delhi,India undefined"
person.fullname.apply(john,['Delhi','India'])
"John Eva Delhi India"