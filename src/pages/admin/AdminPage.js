/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

import NewArticlePage from "../NewArticlePage";

import "./AdminPage.css";
import EditCard from "../../components/EditArticleCard";
import { Link, Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const AdminPage = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const [isCreatingNewArticle, setIsCreatingNewArticle] = useState(false);
  // const [allPostList, setAllPostList] = useState([]);
  // const [allArticleVisible, setAllArticleVisible] = useState(false);
  // const [lastPusblished, setLastPublished] = useState([]);
  // const postsCollectionRef = collection(db, "posts");

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setAllPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(">>>>>>>>>CALL DATABASE");
  //     setLastPublished(
  //       allPostList.slice(allPostList.length - 3, allPostList.length)
  //     );
  //   };
  //   getPosts();
  // }, []);

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
    <div className="adminPage">
      <div className="admin__sidebar">
        <nav>
          <Link to="/createpost">
            <button>+ écrire un article</button>
          </Link>
          <Link to="/admin-articles">
            <button>Tous les articles</button>
          </Link>
        </nav>
      </div>

    </div>
  );
};

export default AdminPage;
