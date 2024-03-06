interface User{
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // email is a string but optional, user can or can not provide the string
};


function isLegal(user: User){
    if(user.age > 18)return true;
    else return false;
}


isLegal({
    firstName: 'Raghu',
    lastName: 'Anand',
    age: 21,
    email: 'raghuaanand@gmail.com'

})