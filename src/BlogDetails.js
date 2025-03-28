import { useParams, useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoaded,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const navigate = useNavigate();

  const deleteBlog = () =>{
    console.log('Deleting blog: ', blog.id);

    fetch('http://localhost:8000/blogs/'+blog.id, {
      method: "DELETE"
    }).then(()=>{
      navigate('/');
    });
  }
  

  return (
    <div className="blog-details">
      {isLoaded && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteBlog}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
