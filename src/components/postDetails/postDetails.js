import React from 'react';
import { deleteById } from '../services/post.service';

const postDetails = ({ post, reloadData }) => {
  const editHandler = (e) => {};
  const deleteHandler = (e) => {
    e.preventDefault();
    deleteById(post.id).then((res) => {
      if (res.data) {
        alert(`Post Id: ${post.id} is deleted`);
        reloadData();
      }
    });
  };

  return post ? (
    <div className="post-details">
      <div className="row">{post.title}</div>
      <div className="row">{post.author}</div>
      <div className="row row-content">{post.content}</div>

      <div className="row">
        <a
          href="#"
          onClick={(e) => {
            editHandler(e);
          }}
        >
          edit
        </a>
        &nbsp;|&nbsp;
        <a
          href="#"
          onClick={(e) => {
            deleteHandler(e);
          }}
        >
          delete
        </a>
      </div>
    </div>
  ) : (
    'No post selected'
  );
};

export default postDetails;
