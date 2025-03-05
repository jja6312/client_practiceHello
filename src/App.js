import logo from './logo.svg';
import './App.css';
import GuestbookForm from './compnents/GuestbookForm';
import GuestbookList from './compnents/GuestbookList';
import { useState, useEffect } from 'react';
import { fetchMessages, postMessage } from './api/guestbookApi';

function App() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const res = await fetchMessages();
      setMessages(res.data);
    } catch (err) {
      console.error("불러오기 실패:", err);
    }
  };

  const addMessage = async (newMessage) => {
    try {
      await postMessage(newMessage);
      loadMessages();  // 저장 후 새로고침
    } catch (err) {
      console.error("저장 실패:", err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">방명록 ✍️</h1>
      <GuestbookForm onAddMessage={addMessage} />
      <GuestbookList messages={messages} />
    </div>
  );
}

export default App;
