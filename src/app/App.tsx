import ChattingSpace from "../components/userElement/chattingSpace";
import "./App.css";

function App() {
  return <ChattingSpace
  userName="aziz"
  messages={[
    { id: 1, content: "hi", createdAt: "Friday 10:10", sender:"ME" },
    { id: 2, content: "how are you?", createdAt: "Friday 10:11" , sender:"OTHER"},
    { id: 3, content: "let's build the app", createdAt: "Friday 10:12" , sender:"ME"}
  ]}
/>
}

export default App;
