var name = "parIs";
var name = "parIs";

undefined
name.toUpperCase()
"PARIS"
name.toLowerCase()
"paris"
name.length
5
var name ="   London   "
undefined
name.length
12
name.trim()
"London"
n

var name = "parIs";

undefined
name[0]
"p"
name.charAt(0)
"p"
var name = "parIs   ";

undefined
name.trim().length
5
name.slice(1)
"arIs   "
name.slice(2)
"rIs   "
var city ="Amsterdam"
undefined
city.slice(1)
"msterdam"
city
"Amsterdam"
city.slice(1,3)
"ms"
city.slice(2,5)
"ste"


var name= "amsTErDaM"

name.charAt(0).toUpperCase()

var name= "amsTErDaM"
undefined
name.charAt(0).toUpperCase()
"A"
name.slice(1).toLowerCase()
"msterdam"
name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
"Amsterdam"

 var subject = "Hi to Javascript coding"

 subject.replace("Javascript","JS")


 var subject = "Hi JavaScript to Javascript coding"
 var subject = "Hi Javascript to Javascript coding"
 undefined
  subject.replace("Javascript","JS")
 "Hi JS to Javascript coding"
 subject.replace(/Javascript/g,'JS')
 "Hi JS to JS coding"
 var sub  = "JavaScript"
 undefined
 sub.replace(/a/g,'A')
 "JAvAScript"
 sub.indexOf('a')
 1
 sub.indexOf('i')
 7
 sub.indexOf('z')
 -1
 sub.indexOf('o')
 -1
  var subject = "Hi Javascript to Javascript coding"
 undefined
 subject.indexOf('Javascript')
 3

 ////////////////
 slice(start,end)
 substring(start,end)
 substr(start,length)

 var city = "Amsterdam"

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.substring(1)
"msterdam"
city.substr(1)
"msterdam"
city.slice(1,4)
"mst"
city.substring(1,4)
"mst"
city.substr(1,4)
"mste"

///////////
var city = "Amsterdam"
undefined
city.slice(-1)
"m"
city.substring(-1)
"Amsterdam"
city.substr(-1)
"m"
city.slice(-1,3)
""
city.substring(-1,3)
"Ams"
city.substr(-1,3)
"m"
city.slice(1,-3)
"mster"
city.substring(1,-3)
"A"
city.substr(1,-3)
""
city.slice(-1,-3)
""
city.substring(-1,-3)
""
city.substr(-1,-3)
""