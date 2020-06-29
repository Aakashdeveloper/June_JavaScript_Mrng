//var myObj = require('./first')
import myObj from './first';
console.log(myObj.users)

console.log(myObj.dbquery.find('orders'))


//console.log(myObj.dbquery.insert('student',{name:'John',city:'Boston'}))

var insertQ = myObj.dbquery.insert('student',{name:'John',city:'Boston'})
console.log(insertQ)
