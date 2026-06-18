import { comments } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> } 
    ) {
    const { id } = await params;
    const comment = comments.find((c) => c.id === parseInt(id));
    return Response.json(comment);
}

export async function PATCH(
    my_request: Request,
    { params} : {params: Promise<{id: string}>}
) {
    const { id } = await params;
    const body = await my_request.json();
    const {text} = body;
    const index = comments.findIndex((c) => c.id === parseInt(id));
    if (index !== -1) {
        comments[index].text = text;
        return Response.json(comments[index]);
    } else {
        return new Response("Comment not found", { status: 404 });
    }
}