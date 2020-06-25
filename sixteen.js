Map
> Help to iterarte over the array and can play logics
Filter
> Help to iterarte and filter the values


var  a = [2,4,6,8]
a.map((data) => console.log(data))
var  a = [2,4,6,8]
a.map((data) => {return data})
(4) [2, 4, 6, 8]
var  a = [2,4,6,8]
a.map((data) => {return data*2})
(4) [4, 8, 12, 16]

var a = [4,6,2,2,66,33,56,33,78,112,32,20,31,12]
a.map((data) => { return data>20})

var a = [4,6,2,2,66,33,56,33,78,112,32,20,31,12]
undefined
a.map((data) => { return data>20})
(14) [false, false, false, false, true, true, true, true, true, true, true, false, true, false]
a.filter((data) => { return data>20})
(8) [66, 33, 56, 33, 78, 112, 32, 31]


////////
var a = [0,1,2,3]
a.map((data) => { return data*2})
(4) [0, 2, 4, 6]
a.filter((data) => { return data*2})
(3) [1, 2, 3]