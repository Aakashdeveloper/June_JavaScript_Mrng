var a = 10
var a; ///declare 
a = 10 /// assignment

var we can redeclare and reassign
let we cannot redeclare but can reassign
const we cannot redeclare nor  reassign

var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a = 12
12
> a
12

> let b = 20
undefined
> b
20
> let b = 21
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b = 21
21
> 

> const c = 10
undefined
> c
10
> const c = 11
Thrown:
SyntaxError: Identifier 'c' has already been declared
> c = 11
Thrown:
TypeError: Assignment to constant variable.