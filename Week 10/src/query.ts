import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://my-postgresql_owner:rYTZyLEdx64K@ep-royal-tooth-a1s5zvub.ap-southeast-1.aws.neon.tech/my-postgresql?sslmode=require"
});

//  this above code block  worked even when it was inside the insertData fucntion

 
// Async function to insert data into a table
async function insertData(email:string,) {

  try {
    await client.connect(); // Ensure client connection is established
    
    const query = "SELECT * FROM users WHERE email = $1;"
    const res = await client.query(query, [email]);

    if(res.rows.length > 0){
        console.log('User FOund: ' , res.rows[0]); // outputs data
        return res.rows[0];
    }else{
        console.log('User not found with the given email');
        return null;  // returns null if no user is found
    }
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData('userx@gmail.com').catch(console.error);