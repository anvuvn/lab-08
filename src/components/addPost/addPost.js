import { useRef, useState } from 'react';
import { add } from '../services/post.service';

const AddPost = ({ postAdded }) => {
  const [post, setPost] = useState({});
  const formRef = useRef(null);
  const addPostHandler = (e) => {
    e.preventDefault();

    let post = {
      title: formRef.current['title'].value,
      authorId: formRef.current['author'].value,
      content: formRef.current['content'].value,
    };
    add(post).then((res) => {
      alert('New Post added');
      postAdded();
    });
  };

  return (
    <div className="add-post">
      <h1>Add new Post</h1>
      <form ref={formRef}>
        <div className="row">
          <label>Title</label>
          <input name="title" value={post.title} />
        </div>
        <div className="row">
          <label>Author Id</label>
          <input name="author" value={post.authorId} />
        </div>
        <div className="row">
          <label>Content</label>
          <input name="content" value={post.content} />
        </div>
        <div className="row">
          <button onClick={(e) => addPostHandler(e)}>Add Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
