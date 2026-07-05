import { useState } from "react";
import pr from "../../assets/profile-picture.png";
import sendPic from "../../assets/send.png";
import MessageCompo from "./messageCompo";

type Message = {
  id: number;
  content: string;
  createdAt: string;
  sender: "ME" | "OTHER";
};

type ChattSpaceProp = {
  userName: string;
  messages: Array<Message>;
};

export default function ChattingSpace({ userName, messages }: ChattSpaceProp) {

      const [message, setMessage] = useState<string>("");

      const onSend = ()=> {
            



      }



  return (
    <div className="w-full max-w-md mx-auto flex flex-col rounded-2xl bg-slate-900 shadow-lg overflow-hidden p-3">
      
      {/* Header */}
      <div className="flex items-center gap-3 bg-slate-800 p-4 border-b border-slate-700">
        <img
          src={pr}
          className="rounded-full h-10 w-10 object-cover"
        />
        <div className="text-white font-semibold">{userName}</div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-4 h-80 overflow-y-auto bg-slate-900">
        {messages.map((item) => (
          <MessageCompo
            key={item.id}
            id={item.id}
            content={item.content}
            createdAt={item.createdAt}
            sender={item.sender}
          />
        ))}
      </div>
<div className="flex items-center gap-4 w-full">
  <input
    type="text"
    className="flex-1 rounded-3xl p-4 h-10 outline-none"
    placeholder="Type a message..."
  />

  <button className="shrink-0 bg-blue-600 rounded-full p-3">
    <img src={sendPic} className="h-6 w-6" />
  </button>
</div>
    </div>
  );
}