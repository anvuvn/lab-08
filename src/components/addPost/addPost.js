import React from 'react';

const addPost = () => {
  return (
    <div>
      <h1>Add new Post</h1>
      <div className="row">
        <label>Title</label>
        <input value={post.title} onChange={(e) => onInputChange('title', e)} />
      </div>
      <div className="row">
        <label>Author</label>
        <input
          value={post.author}
          onChange={(e) => onInputChange('author', e)}
        />
      </div>
      <div className="row">
        <label>Content</label>
        <input
          value={post.content}
          onChange={(e) => onInputChange('content', e)}
        />
      </div>
      <div className="row">
        <button onClick={addPostHandler}>Add Post</button>
      </div>
    </div>
  );
};

export default addPost;
