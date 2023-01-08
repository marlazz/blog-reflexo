import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "../App.css";
import { Link } from "react-router-dom";

const NewArticlePage = ({ isOpen, handleOpen }) => {
  const [title, setTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const isAuth = localStorage.getItem("isAuth")

  console.log("isPublished", isPublished);
  const postsCollectionRef = collection(db, "posts");

  // let navigate = useNavigate();

  const addArticleContent = (value) => {
    setArticleContent(value);
  };

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      articleContent,
      isPublished,
    });
    alert("Nouvel article ajouté");
    setTitle("");
    setArticleContent("");
    setIsPublished(false);
    handleOpen(false);
  };

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
  useEffect(() => {
    console.log("isPublished", isPublished);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPublished]);

  return (
    <div className="adminPage">
      <div className="admin__sidebar">
        <nav>
          <Link to="/admin-articles">
            <button>Tous les articles</button>
          </Link>
        </nav>
      </div>
      {isAuth && (
        <div className="admin__content">
          <h1>Nouvel Article</h1>
          <div>
            <label htmlFor="title">Titre:</label>
            <input
              id="title"
              placeholder="Title..."
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <ReactQuill
              theme="snow"
              modules={modules}
              value={articleContent}
              onChange={addArticleContent}
            />
          </div>
          <h4>Status :</h4>
          <input
            type="radio"
            checked={isPublished}
            onClick={() => setIsPublished(true)}
          />
          <label>Publier</label>
          <input
            type="radio"
            checked={!isPublished}
            onClick={() => setIsPublished(false)}
          />
          <label>Ajouter une image pour la miniature</label>
          <input type="file"/>
          <input
            type="radio"
            checked={!isPublished}
            onClick={() => setIsPublished(false)}
          />
          <label>Enregistrer dans les brouillons</label>
          <div>
            <button onClick={createPost}>Valider</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArticlePage;
