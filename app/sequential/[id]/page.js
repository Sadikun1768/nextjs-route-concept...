import getPost from "@/api/getPost";

export default async function SingleSqnPage({ params}) {
    const {id } = await params;
    const post = await getPost(id);
    // console.log(post);

 return (
    <div>
        <h3>Single Sequential Page</h3>
        <p className="text-lime-600 ps-2 ">{post.title}</p>
        <p className="ps-2"> {post.body}</p>
    

    </div>
 );
}