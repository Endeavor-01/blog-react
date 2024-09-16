import { useParams ,useNavigate } from "react-router-dom";
import useFetch from "./fetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data:blog ,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);

    const history = useNavigate();

    const clickDelete = () => {
         fetch('http://localhost:8000/blogs/' + blog.id ,{
            method : 'DELETE'
         }).then(() => {
            history('/');
         })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={clickDelete}>Delete</button>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails ;