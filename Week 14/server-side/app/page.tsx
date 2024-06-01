import axios from "axios";



async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}


//  the above way is not the best way to fetch the data but we will get to it in future.


//  async component -> it was not in react and not in nextjs for the long time but now supports but only in server components and not in client components
export default async function Home() {

  await new Promise((r) => setTimeout(r, 5000));   // artificial delay 

  const UserDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                  {/* this question mark after UserDetails checks if the UserDetails is null or undefined. If it is undefined or null it directly sends undefined. But if we do not use ? it will send TypeError: Cannot read property 'name' of null or undefined */}
                    Name: {UserDetails?.name}
                </div>
                
                {UserDetails?.email}
            </div>
        </div>
    </div>
  );
}
