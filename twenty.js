RegExp

^$
^([a-z])$

var a= "hi"
a.match("^([a-z])$")
null
var a= "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a= "H"
a.match("^([a-z])$")
null


^([a-zA-Z0-9]+)$

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")

var phone  = 1234567890
phone.match("[0-9]{10}")
VM310:2 Uncaught TypeError: phone.match is not a function
    at <anonymous>:2:7
(anonymous) @ VM310:2
phone.toString()
"1234567890"
phone.toString().match("[0-9]{10}")
["1234567890", index: 0, input: "1234567890", groups: undefined]