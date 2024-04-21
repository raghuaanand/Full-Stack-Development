//  ------------------------------------------- CREATE TABLE ------------------------------------------- //


/* import { Client } from "pg";
const client = new Client({

    //  used connection string because I am using neon for database
    connectionString: "postgresql://my-postgresql_owner:rYTZyLEdx64K@ep-royal-tooth-a1s5zvub.ap-southeast-1.aws.neon.tech/my-postgresql?sslmode=require"
});



    // write a function to create users table in database
async function createUserTable(){
    await client.connect();
    const result = await client.query(
        `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`
    );

    console.log(result);
}

createUserTable();
 */










// -------------------------------------------- INSERTING INTO DATABASE ---------------------------------------------------------//


import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://my-postgresql_owner:rYTZyLEdx64K@ep-royal-tooth-a1s5zvub.ap-southeast-1.aws.neon.tech/my-postgresql?sslmode=require"
});

//  this above code block  worked even when it was inside the insertData fucntion

 
// Async function to insert data into a table
async function insertData(username:string, email:string, password:string) {

  try {
    await client.connect(); // Ensure client connection is established
    // const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username4', 'user5@example.com', 'user_password');";  // we do not pass values provided by the user into database as it is we will do SQL Injection for that.

    //  what is SQL Injection -> example of putting a query in the input box and thus sending it as the query and changin the databases.

    //  by passing tbe 
    const insertQuery = "INSERT INTO users(username, email, password) VALUES ($1, $2, $3);"
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData('username5', 'userx@gmail.com', 'password@111').catch(console.error);