import React from 'react';

const Comments = ({ post }) => {
  console.log('comments render....');
  return (
    <div className="comment-details">
      {post && post.comments?.length > 0
        ? post.comments.map((c) => {
            return <div key={c.id}>{c.name}</div>;
          })
        : 'Empty Comments...'}
    </div>
  );
};

export default Comments;
