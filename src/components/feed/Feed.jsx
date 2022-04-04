import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";

//タイムライン用とプロフィール用がある。
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
        : await axios.get(`/posts/timeline/62301ab54ded0ed0584598e4`); //ホームの場合

      setPosts(res.data);
      // console.log(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
