// App.jsx
import React from "react";
import PostCard from "./components/postcard";
import "./App.css";

const posts = [
  {
    id: 1,
    username: "JohnDoe",
    profilePic: "https://i.pravatar.cc/100?img=1",
    content: "Just had the best coffee in town! ☕ #MorningVibes",
  },
  {
    id: 2,
    username: "JaneSmith",
    profilePic: "https://i.pravatar.cc/100?img=2",
    content: "Loving the sunset views from my rooftop! 🌅 #GoldenHour",
  },
  {
    id: 3,
    username: "Alex99",
    profilePic: "https://i.pravatar.cc/100?img=3",
    content: "Coding all night! 🚀 Who else loves React? #DevLife",
  },
];

const App = () => {
  return (
    <div className="app">
      <h1 className="app-header">Social Feed</h1>
      <div className="post-container">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
