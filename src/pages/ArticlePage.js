/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";

function ArticlePage() {
  const { article } = useParams();
  console.log("articleID", article);

  const postRef = doc(db, "posts", article);

  const [postData, setPostData] = useState();

  useEffect(
    () => {
      const getPost = async () => {
        const post = await getDoc(postRef);
        setPostData(post.data(), doc.id);
      };
      getPost();
    },
    [article]
  );

  console.log("POSTdata :>>>>>>>>>", postData);

  return (
    <div className="homePage">
      <h1>article</h1>
      <h1>{postData && postData.title}</h1>
      <p>{postData && (postData.postContent || postData.content)}</p>
    </div>
  );
}

export default ArticlePage;
