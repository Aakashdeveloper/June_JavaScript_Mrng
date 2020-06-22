var a = ['hhh','hhbhb','rdde']
var b = [7,7,754,97,22]
var c = [true,false,false,true,true]

var d = ["njj","nj",776,'kjb',true,7,8,"hbh"]

var city =["Delhi","London","Paris","Newyork"]
undefined
city.push("Dubai")
5
city
(5) ["Delhi", "London", "Paris", "Newyork", "Dubai"]
city
(5) ["Delhi", "London", "Paris", "Newyork", "Dubai"]
city[0]
"Delhi"
city.length
5
city[city.length-1]
"Dubai"

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

undefined
city.pop()
"Boston"
city
(6) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai"]

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

city.pop(2)
"Boston"
city.pop(20)
"Dubai"

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.pop(2)
"Boston"
city.pop(20)
"Dubai"
city.unshift("Nice")
6
city
(6) ["Nice", "Delhi", "Prais", "Amsterdam", "Nice", "Helsinki"]
city.shift()
"Nice"
city
(5) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki"]

push > add at the end
pop > remove from the end
shift> remove from the begining
unshift> add at the begining


var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

undefined
city.slice(3,6)
(3) ["Nice", "Helsinki", "Dubai"]0: "Nice"1: "Helsinki"2: "Dubai"length: 3__proto__: Array(0)
city
(7) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.splice(2,0,'Venice','Inssburg')
[]
city
(9) ["Delhi", "Prais", "Venice", "Inssburg", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.splice(3,1)
["Inssburg"]
city
(8) ["Delhi", "Prais", "Venice", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.splice(3,1,'Nice','pune')
["Amsterdam"]


var city = ["Delhi", "Prais", "Venice", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.indexOf('Nice')
4
city.indexOf('Pune')
-1
city.indexOf('Mumbai')
-1
city.indexOf('Delhi')
0

var a = ['a','b','v']
var num = [1,2,3]

undefined
a+num
"a,b,v1,2,3"
a.concat(num)
(6) ["a", "b", "v", 1, 2, 3]
var c = ['hi','bie']
undefined
a.concat(c,num)
(8) ["a", "b", "v", "hi", "bie", 1, 2, 3]


var x ,y;
[x,y]=[10,20]

var x ,y;
[x,y]=[10,20]
(2) [10, 20]
x
10
y
20
var colors = ["Red","Yellow","Green","Orange"]

undefined
var [a,b]=colors
undefined
a
"Red"
b
"Yellow"

var url = "https://www.raspberrypi.org/downloads/raspberry-pi-desktop/"
undefined
url.split('/')
(6) ["https:", "", "www.raspberrypi.org", "downloads", "raspberry-pi-desktop", ""]
var a = "Javascript"
undefined
a.split('')
(10) ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var b = a.split('')
undefined
b
(10) ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
b.toString()
"J,a,v,a,s,c,r,i,p,t"
b.toString().replace(/,/,'')
"Ja,v,a,s,c,r,i,p,t"
b.toString().replace(/,/g,'')
"Javascript"
var city = ["Delhi", "Prais", "Venice", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

undefined
city.sort()
(8) ["Amsterdam", "Boston", "Delhi", "Dubai", "Helsinki", "Nice", "Prais", "Venice"]
city.reverse()
(8) ["Venice", "Prais", "Nice", "Helsinki", "Dubai", "Delhi", "Boston", "Amsterdam"]
var city = ["Delhi", "Prais", "Venice", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

undefined
undefined
city.reverse()
(8) ["Boston", "Dubai", "Helsinki", "Nice", "Amsterdam", "Venice", "Prais", "Delhi"]
city.sort().reverse()
(8) ["Venice", "Prais", "Nice", "Helsinki", "Dubai", "Delhi", "Boston", "Amsterdam"]

////Es7
var city = ["Delhi", "Prais", "Venice", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

undefined
city.includes('Prais')
true
city.includes('Mumbai')
false

var myarr = Array.of(6)
undefined
myarr
[6]
var myarr = Array.of(6,7,8,9)
undefined
myarr
(4) [6, 7, 8, 9]

var colors = ["Red","Yellow","Green","Orange"]

undefined
console.log(...colors)
VM1884:1 Red Yellow Green Orange

var a = [10,20,30,40]

var a = [10,20,30,40]
undefined
a.fill(100,3)
(4) [10, 20, 30, 100]
a.fill(100,1,3)
(4) [10, 100, 100, 100]


var myarr = ["Delhi","Mumbai",[1,2,3['a','b'],4,5],'Pune','Chandigarh']

var myarr = ["Delhi","Mumbai",[1,2,3,['a','b'],4,5],'Pune','Chandigarh']
undefined
myarr[4]
"Chandigarh"
myarr[2][2]
3
myarr[2][3]
(2) ["a", "b"]
myarr[2][3][1]
"b"
myarr.flat()
(10) ["Delhi", "Mumbai", 1, 2, 3, Array(2), 4, 5, "Pune", "Chandigarh"]
myarr.flat(2)
(11) ["Delhi", "Mumbai", 1, 2, 3, "a", "b", 4, 5, "Pune", "Chandigarh"]