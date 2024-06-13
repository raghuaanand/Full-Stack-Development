import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const NEXT_AUTH =  {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'raghuaanand@gmail.com' },
                password: { label: 'Password', type: 'password', placeholder: '1234566789' }
            },
            async authorize(credentials: any) {

                return {
                    id: "user1",
                    email: "raghuaanand@gmail.com",
                    name: "Raghu Anand"
                };
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    //  to get some extra data
    //  for example if you want to block a certain user from siging in

    // callbacks: {
    //     signIn: ({user}) => {
    //         if(user.email == "randomemail@gmail.com"){
    //             return false;
    //         }
    //         return true;
    //     }
    // }

    callbacks: {
        jwt: ({token, user}:any) => {
            console.log(token);
            return token;
        },
        session: ({ session, token, user}:any) => {
            if(session && session.user){
                session.user.id = token.sub
            }
            return session;
        }
    },

    //  takes users to the developers created singin page instead of going to the signin in page provided by the next auth
    pages:{
        signIn: "/signin"
    }
}