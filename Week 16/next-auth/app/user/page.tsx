import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";


// this is how we can get the user details in server side components


// no 1 -> make function async 
// no 2 -> await on the getServerSession function


export default function(){
    const session = getServerSession(NEXT_AUTH);
    return(
        <div>
            {JSON.stringify(session)}
        </div>
    )
}