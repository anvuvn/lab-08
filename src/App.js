import logo from './logo.svg';
import './App.css';

import { PostProvider } from './components/context/post.context';
import Dashboard from './components/container/dashboard';

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Dashboard />
      </PostProvider>
    </div>
  );
}

export default App;
