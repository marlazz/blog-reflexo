import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function BlogPage() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  console.log('postlist', postLists)

  return (
    <div className="homePage">
      <h1>Blog</h1>
      {postLists.map((post, postId) => {
        return <div key={postId}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <NavLink to={`/blog/${post.id}`}>Lire l'article</NavLink>
        </div>;
      })}
    </div>
  );
}

export default BlogPage;
