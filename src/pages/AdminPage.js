import { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import NewArticlePage from "./NewArticlePage";

const AdminPage = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isCreatingNewArticle, setIsCreatingNewArticle] = useState(false);

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
          <button>Voir tous les articles</button>
        </div>
      )}
      {isAuth && isCreatingNewArticle && <NewArticlePage />}
    </div>
  );
};

export default AdminPage;
