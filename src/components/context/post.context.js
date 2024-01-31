import { createContext, useContext, useState } from 'react';

const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const setPostId = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <PostContext.Provider value={{ selectedPostId, setPostId }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
