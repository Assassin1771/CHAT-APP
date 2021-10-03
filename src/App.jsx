import { ChatEngine } from "react-chat-engine";
import ChatFeedA from "./components/ChatFeedA";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="d9617744-0435-4647-860f-edcff849befe"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeedA {...chatAppProps} />}
    />
  );
};

export default App;
