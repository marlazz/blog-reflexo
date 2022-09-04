import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function BlogPage() {
  const [publishedPostList, setPublishedPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPublishedPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((post) => (
        post.isPublished !== false
      )));
    };

    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  console.log('postlist', publishedPostList)

  return (
    <div className="homePage">
      <h1>Blog</h1>
      {publishedPostList.map((post, postId) => {
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
