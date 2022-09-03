import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";

const NewArticlePage = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postContent,
      // author: { name: auth.currentUser, id: auth.currentUser},
    });
    alert('Nouvel article ajouté');
    setTitle("")
    setPostContent("")
    // to do: clear form inputs once its submited
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/login");
    }
  },);

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
        <div>
          <label htmlFor="content">Article:</label>
          <textarea
            id="content"
            placeholder="Post..."
            value={postContent}
            onChange={(event) => {
              setPostContent(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
};

export default NewArticlePage;
