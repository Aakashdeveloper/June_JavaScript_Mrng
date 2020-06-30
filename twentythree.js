//es5//
function language(name,country){
    this.name = name;
    this.country=country 
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: "Hindi", country: "India"}
Hindi.country
"India"

//es6///
class language1{
    constructor(name,country){
        this.name=name;
        this.country= country
    }
}

var English = new language1('English','USA')
undefined
English
language1 {name: "English", country: "USA"}

