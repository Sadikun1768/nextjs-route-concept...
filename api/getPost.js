import wait from "@/util/wait";

export default async function getPost(id) {
   const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
   );

   const posts = await res.json();

   await wait (2000);

   return posts;
}