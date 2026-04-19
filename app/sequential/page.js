import getPosts from "@/api/getPosts";
import User from "@/models/user";
import Link from "next/link";

export default async function SequentialPage() {
    const posts = await getPosts();
    // console.log(posts);

    return (
        <div>
            <h3>Sequential Page</h3>
            <ul>
                {posts?.length > 0 ? (
                     posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/sequential/${post.id}`}>
                               <p className="text-lime-600 ps-2 ">{post.title}</p>
                        {/* <p className="ps-2"> {post.body}</p> */}
                        </Link>
                     
                     </li>
                ))
                ) : (
                   <li>No posts found!</li>
                )}
               
            </ul>
        </div>
    );
}


