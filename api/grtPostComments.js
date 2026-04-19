import wait from "@/util/wait";

export default async function getPostComments(id) {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const comments = await res.json();
    console.log(comments);
    await wait(6000);

    return comments;

}