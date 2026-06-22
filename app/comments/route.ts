import { comments } from "./data";
import { NextRequest } from "next/server";

// export async function GET() {
// //   return new Response(JSON.stringify(comments), {
// //     headers: { "Content-Type": "application/json" },
//     //   });
//     return Response.json(comments);
// }

export async function GET(my_request: NextRequest) {
  const searchParams = my_request.nextUrl.searchParams;
  console.log(searchParams);

  const query = searchParams.get("query");
  console.log("query =", query);

  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  console.log(filteredComments);

  return Response.json(filteredComments);
}


export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201,
    });
}