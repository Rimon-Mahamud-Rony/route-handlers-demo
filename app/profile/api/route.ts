import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(my_request: NextRequest) {

    /*const requestHeaders = new Headers(my_request.headers);
    console.log(requestHeaders.get("Authorization"));*/

    const headerList = await headers();
    console.log(headerList.get("Authorization"))

    return new Response("<h1> Profile API data </h1>", {
        headers: {
            "Content-Type":"text/html",
        },
    });

} 