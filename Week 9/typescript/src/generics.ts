/* type Input = number | string;

function firstEl(arr: Input[]){
    return arr[0];
}

const value = firstEl(["Raghu", "Anand"]);
// console.log(value.toUpperCase);  // -> this gives error becasue typescript thinks that the parameter passed is of Input type and toUpperCase can not be applied on number

 */


// ---> these above problem can be solved using generics

function argument<T>(arg: T){  // here t means parameter can be of nay type, the one who is calling will be knowing what it is.
    return arg;
}

const check1 = argument<string>("Raghu");
const check2 = argument<number>(100);