import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';

const App = () => {
  return (
    <ChatEngine 
      height='100vh'
      projectID='d9119d3a-0895-4159-9a72-0c451991978f'
      userName='Gerges'
      userSecret='123456'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
