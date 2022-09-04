import { useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

import NewArticlePage from "./NewArticlePage";

const AdminPage = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isCreatingNewArticle, setIsCreatingNewArticle] = useState(false);
  const [allPostList, setAllPostList] = useState([]);
  const [allArticleVisible, setAllArticleVisible] = useState(false)

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setAllPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(">>>>>>>>>CALL DATABASE")
    };
    getPosts();
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/blog";
    });
  };

  return (
    <div>
      <h1>Admin</h1>
      {!isAuth && (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      {isAuth && (
        <div>
          <button onClick={signUserOut}>Déconnexion</button>
          {!isCreatingNewArticle && (
            <button onClick={() => setIsCreatingNewArticle(true)}>
              Ajouter un nouvel article
            </button>
          )}
          <button onClick={() => setAllArticleVisible(true)}>{ allArticleVisible ? "Cacher tous les articles" : "Voir tous les articles" }</button>
        </div>
      )}
      {isAuth && isCreatingNewArticle && (
        <NewArticlePage
          isOpen={isCreatingNewArticle}
          handleOpen={setIsCreatingNewArticle}
        />
      )}
      { isAuth && allArticleVisible && (
        allPostList.map((post, postId) => (
          <div key={postId}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{__html: post.articleContent}}></div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPage;
