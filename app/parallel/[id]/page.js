import getPost from "@/api/getPost";
import getPostComments from "@/api/grtPostComments";


export default async function SingleSqnPage({ params}) {
    const {id } = await params;
    const post = await getPost(id);
    // console.log(post);
    const comments = await getPostComments(id);

 return (
    <div>
        <h3>Single Sequential Page</h3>
        <p className="text-lime-600 ps-2 ">{post.title}</p>
        <p className="ps-2">{post.body}</p>
        <div className="mt-4 text-sm text-gray-500 border-t pt-2">
              <h4 className="text-lg text-amber-300 mb-2">Comments:</h4>
           {comments?.length > 0 ? (
             comments.map((comment, index) =>(
           <li key={comment.id} className="text-pink-400">{index + 1} {comment.email}</li>
            ))
           ) : (
            <p>No comments available.</p>
           )}
           
        </div>
    </div>
 );
}