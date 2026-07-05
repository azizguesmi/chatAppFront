import { useState } from "react";
import { DeleteMessage } from "../../hooks/deleteData";
import deleteImg from "../../assets/delete-photo.png";

type MessageProp = {
  id: number;
  content: string;
  createdAt: string;
  sender: "ME" | "OTHER";
};

export default function MessageCompo({
  id,
  content,
  createdAt,
  sender,
}: MessageProp) {
  const [isHover, setIsHover] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async (id: number) => {
    try {
      await DeleteMessage({ id_message: id });
      setIsDeleted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        alert(err.message);
      } else {
        console.log("Unknown error occurred");
      }
    }
  };

  return (
    <div
      className={`flex flex-col gap-1 px-3 py-2 ${
        sender === "ME" ? "items-end" : "items-start"
      }`}
    >
      {/* message bubble */}
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`flex items-center gap-2 px-3 py-2 rounded-2xl text-white text-sm max-w-xs
          ${isDeleted ? "bg-gray-600" : sender === "ME" ? "bg-blue-600" : "bg-slate-700"}
        `}
      >
        <span>{isDeleted ? "Message deleted" : content}</span>

        {/* delete button only for ME */}
        {!isDeleted && sender === "ME" && (
          <button
            onClick={() => handleDelete(id)}
            className="w-6 h-6 ml-2"
          >
            <img src={deleteImg} />
          </button>
        )}
      </div>

      {/* timestamp */}
      {isHover && (
        <span className="text-xs bg-slate-300 text-black px-2 py-1 rounded-full">
          {createdAt}
        </span>
      )}

      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}