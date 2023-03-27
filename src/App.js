
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from '../src/ChatFeed';
import LoginForm from './LoginForm';
import './App.css';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
    height="100vh"
    projectID="55b8aef9-2ed7-49e4-94be-b69da7c0ac3a"
     userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
  )
}

export default App;
