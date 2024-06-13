// src/components/BlogPost.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BlogPost.css';

function BlogPost({ title, date, author, image, text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{date} by {author}</p>
      <img src={image} alt={title} className='blogImg'/>
      <p>{text}</p>
      <button className='likeBtn' onClick={() => setLikes(likes + 1)}>Like {likes}</button>
      <button className='dislikeBtn' onClick={() => setDislikes(dislikes + 1)}>Dislike {dislikes}</button>
      <hr />
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BlogPost;
