// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import blogData from './components/BlogData';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='Blog-container'>
      {blogData.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          text={post.text}
        />
      ))}

      </div>

      <Footer/>
    
    </div>
  );
}

export default App;
