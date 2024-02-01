import { useEffect, useMemo, useState } from 'react';
import './dashboard.css';

import Posts from '../posts/posts';

import PostDetails from '../postDetails/postDetails';
import { getAll } from '../services/post.service';

import { usePostContext } from '../context/post.context';
import AddPost from '../addPost/addPost';
import Comments from '../comment/comments';

const Dashboard = (props) => {
  const { selectedPostId, setPostId } = usePostContext();

  const [selectedPost, setSelectedPost] = useState(null);

  const [currentTitle, setCurrentTitle] = useState('');
  const [posts, setPosts] = useState([]);

  const commentMemo = useMemo(
    () => <Comments post={selectedPost}></Comments>,
    [selectedPost]
  );

  const itemClickHandler = (post) => {
    setSelectedPost(post);
    setPostId(post.id);
    console.log(post.id);
  };
  const updateTitle = () => {
    selectedPost.title = currentTitle;
    setSelectedPost({ ...selectedPost });
  };

  useEffect(() => {
    getAll().then((res) => {
      setPosts(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedPost) setCurrentTitle(selectedPost.title);
  }, [selectedPost]);

  const reloadData = () => {
    getAll().then((res) => {
      setPosts(res.data);
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="Container">
        <Posts posts={posts} handleSelectItem={itemClickHandler} />
      </div>

      <div className="row">
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        <button onClick={updateTitle}>Change</button>
      </div>

      <div>
        {selectedPost ? (
          <PostDetails post={selectedPost} reloadData={reloadData} />
        ) : (
          ''
        )}
      </div>
      <div>{commentMemo}</div>
      <div>
        {selectedPostId ? <div>Selected Post Id: {selectedPostId}</div> : ''}
      </div>
      <div>
        <AddPost postAdded={reloadData} />
      </div>
    </div>
  );
};

export default Dashboard;
