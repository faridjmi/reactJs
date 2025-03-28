import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Farid");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
    
  const addBlogData = (event) =>{
    event.preventDefault();
    const blog = {title, body, author};
    setIsLoaded(true);

    fetch('http://localhost:8000/blogs',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log("Blog added successfully!");
        setIsLoaded(false);
        navigate("/");  
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={addBlogData}> 
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog details</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Written By</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="farid">Farid</option>
          <option value="inaaya">Inaaya</option>
        </select>
        {!isLoaded && <button>Add Blog</button>}
        {isLoaded && <button>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
