import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList.js"

console.log(blogData);

const { name, image, about, posts} = blogData

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about}/>
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
