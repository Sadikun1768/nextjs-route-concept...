import wait from "@/util/wait";

export default async function getPosts() {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    const posts = await res.json();
    await wait(3000);
    return posts;
}



