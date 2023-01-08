import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, provider } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import NewArticlePage from "../NewArticlePage";
import EditCard from "../../components/EditArticleCard";

const AllArticlesPage = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const [isCreatingNewArticle, setIsCreatingNewArticle] = useState(false);
  const [allPostList, setAllPostList] = useState([]);
  const [allArticleVisible, setAllArticleVisible] = useState(false);
  const [lastPusblished, setLastPublished] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setAllPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(">>>>>>>>>CALL DATABASE");
      setLastPublished(
        allPostList.slice(allPostList.length - 3, allPostList.length)
      );
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
      <div className="admin__sidebar">
        <nav>
          <Link to="/createpost">
            <button>+ écrire un article</button>
          </Link>
          <button>Tous les articles</button>
        </nav>
      </div>
      <div className="admin__content">
        <div className="content__header">
          <h1 className="content__title">Tableau de bord</h1>
          <button className="signout-btn" onClick={signUserOut}>
            Déconnexion
          </button>
          {!isAuth && (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
        </div>

        <div className="content__edito">
          <section className="content__edito--section">
            <h2>Rechercher un article</h2>
            <form>
              <input placeholder="Titre" />
              <button>loupe</button>
            </form>
          </section>
          <section className="content__edito--section">
            {isAuth && isCreatingNewArticle && (
              <NewArticlePage
                isOpen={isCreatingNewArticle}
                handleOpen={setIsCreatingNewArticle}
              />
            )}
          </section>

          <h2>Dernières publications</h2>
          <section className="content__edito--section-cards">
            {isAuth &&
              allPostList.map((post, postId) => (
                <EditCard key={postId} article={post} />
              ))}
          </section>
        </div>
      </div>

    </div>
  );
};

export default AllArticlesPage;
