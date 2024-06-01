import axios from "axios";

async function getUserDetails(){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}


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
