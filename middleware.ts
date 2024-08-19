import { NextRequest, NextResponse } from "next/server";
import { UserControllers } from "./modules/user/UserControllers";


export async function middleware(request: NextRequest) {

    // if (request.nextUrl.pathname == "/") {
    // if (user) {
    //     return NextResponse.redirect("/");
    // }
    // return NextResponse.redirect(
    //     new URL("/login", request.url)
    // )
    // }
    // if (request.nextUrl.pathname == "/login" || request.nextUrl.pathname == "/register") {
    //     return NextResponse.redirect(
    //         new URL("/", request.url)
    //     )
    // }

    return NextResponse.next();
}
