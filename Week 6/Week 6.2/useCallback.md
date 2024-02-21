# referential equality
- equal by value but not equal by value

var a = 1;
var b = 2;
 a == b -> true

 function sum(a, b){
    return a+b;
 }

 function sum2(a,b){
    return a+b;
 }

 sum == sum2 -> false because of referential equality 