import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import ArticleCard from '../components/ArticleCard';
import './BlogPage.css';

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
    <div className="blog-page" >
      <h1>Blog</h1>
      <div className="blog-articles">
      {publishedPostList.map((post, postId) => {
        return <ArticleCard key={postId} article={post} id={post.id} />
      })}
      </div>
    </div>
  );
}

export default BlogPage;
