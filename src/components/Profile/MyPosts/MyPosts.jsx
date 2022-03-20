import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hello, Neo!", likesCount: 12 },
    { id: 2, message: "Choose wisely...", likesCount: 10 },
  ];

  let postsElements = postsData.map((p) => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount} />;
  });

  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
