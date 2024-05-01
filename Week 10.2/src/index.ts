import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// --------------------------------- CREATING TABLE ----------------------------------------//

/* async function insertUser(username: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true,
            firstName: true,
            lastName: true
        }
    })

    console.log(res);
}

insertUser("Raghu", "12345678", "Raghu", "Anand"); */


// ----------------------------------- UPDATING TABLE--------------------------------------//

interface updateParams{
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: updateParams
){
    const res = await prisma.user.update({
        where: {username},
        data: {
            firstName,
            lastName
        }
    });

    console.log(res);
}

updateUser("raghuaanand", {
    firstName: "Ravi",
    lastName: "Ranjan"
})