interface User {
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
})