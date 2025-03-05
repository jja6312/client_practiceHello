function GuestbookList({ messages }) {
    return (
      <div className="w-full max-w-md">
        {messages.length === 0 && <p>아직 메시지가 없습니다.</p>}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="p-4 mb-2 bg-white rounded shadow"
          >
            <p className="font-bold">{msg.name}</p>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default GuestbookList;
  