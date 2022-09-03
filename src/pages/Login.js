import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  console.log("isAuth", isAuth);
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
      window.location.pathname = "/createPost";
    });
  };

  return (
    <div>
      {!isAuth && (
        <div>
          <h1>Espace réservé aux administrateurs du blog</h1>
          <p>Authentifiez-vous avec votre compte google</p>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      )}
      { isAuth && (
        <div>
          <button onClick={signUserOut}>Déconnexion</button>
          <Link to="/createpost">Nouvel article</Link>
        </div>
      )}
    </div>
  );
};

export default Login;
