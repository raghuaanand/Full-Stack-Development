import { NextRequest, NextResponse } from "next/server";

let count = 0;

export function middleware(request: NextRequest){
    count++;
    // console.log(` This is ${count}th requestuest`);
    // const res = NextResponse.next();
    // return res;

    console.log(request.nextUrl.pathname);
    if(request.nextUrl.pathname.startsWith('/admin')){
        return NextResponse.redirect(new URL('/signin', request.nextUrl));
    }

    if(request.nextUrl.pathname.startsWith('/dashboard')){
       return NextResponse.next();
    }
}

// the biggest problem is that it runs on all the routes
// we can have a config


// this let's middleware run only when the /api/*** route is called that means only to the backend rountes and not to the frontend routes
// we can some filtering but only one logic


// export const config = {
//     matcher: '/api/:path*'
// }