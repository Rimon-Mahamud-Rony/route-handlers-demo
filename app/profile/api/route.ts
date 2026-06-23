import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(my_request: NextRequest) {

    /*const requestHeaders = new Headers(my_request.headers);
    console.log(requestHeaders.get("Authorization"));*/

    const headerList = await headers();
    console.log(headerList.get("Authorization"))

    const theme = my_request.cookies.get("theme");
    console.log(theme);

    const cookiesStore = await cookies();
    cookiesStore.set("resultsPerPage", "20");
    console.log(cookiesStore.get("resultsPerPage"));

    return new Response("<h1> Profile API data </h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie":"theme=dark"
        },
    });
}  