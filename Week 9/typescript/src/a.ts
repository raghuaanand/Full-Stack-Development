/* interface User {
	firstName: string;
	lastName: string;
	email?: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

isLegal({
    firstName: 'Raghu',
    lastName: 'Anand',
    email: 'raghuaanand@gmail.com',
    age: 21
}) */


//  implementing interfaces

/* interface Person{
    name: String,
    age: number,
    greet(phrase: string): void // a funciton named greet that takes string as input and returns void
}

// this above interface can be used to implement classes

class Manager implements Person{
    name: String;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }

}

const e = new Manager('raghu', 21); */

//  types in typescript

type User = {  // = is not put in interfaces  // check the slides at https://daily-code-web.vercel.app/tracks/6SbPPXGkG8QKFOTW9BmL/ts-7
    firstname: String,
    email: String,
    age: number
}