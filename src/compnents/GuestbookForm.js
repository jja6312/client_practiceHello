import { useState } from "react";

function GuestbookForm({ onAddMessage }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return alert("이름과 메시지를 입력해 주세요!");
    onAddMessage({ name, message });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        남기기
      </button>
    </form>
  );
}

export default GuestbookForm;
