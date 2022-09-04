/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import "../App.css"

function ArticlePage() {
  const { article } = useParams();

  const postRef = doc(db, "posts", article);

  const [articleTitle, setArticleTitle] = useState();
  const [articleContent, setArticleContent] = useState();

  useEffect(
    () => {
      const getPost = async () => {
        const post = await getDoc(postRef);
        setArticleTitle(post.data().title, doc.id);
        setArticleContent(post.data().articleContent, doc.id)
        console.log(">>>>>>>>>CALL DATABASE")
      };
      getPost();
    },
    [article]
  );

  return (
    <div className="homePage">
      <h1>{articleTitle}</h1>
      <div className="quill-content" dangerouslySetInnerHTML={{__html: articleContent && articleContent}}></div>
    </div>
  );
}

export default ArticlePage;
