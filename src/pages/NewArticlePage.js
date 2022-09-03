import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const NewArticlePage = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [articleContent, setArticleContent] = useState("");

  const postsCollectionRef = collection(db, "posts");

  let navigate = useNavigate();

  const addArticleContent = (value) => {
    setArticleContent(value)
  }
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      articleContent,
    });
    alert("Nouvel article ajouté");
    setTitle("");
    setPostContent("");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/login");
    }
  });

  console.log("postContent", postContent)

  const modules = {
    toolbar: [
      [{ header: [2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div>
      <Link to="/login">Retour au tableau de bord</Link>
      <div>
        <h1>Créer un nouveau post</h1>
        <div>
          <label htmlFor="title">Titre:</label>
          <input
            id="title"
            placeholder="Title..."
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        {/* <div>
          <label htmlFor="content">Article:</label>
          <textarea
            id="content"
            placeholder="Post..."
            value={postContent}
            onChange={(event) => {
              setPostContent(event.target.value);
            }}
          />
        </div> */}
        <div>
          <ReactQuill
            theme="snow"
            modules={modules}
            onChange={addArticleContent}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
};

export default NewArticlePage;
