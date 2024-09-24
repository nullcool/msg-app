import MessageInput from "./MessageInput";

function ChatWindow({ friend, messages, onSendMessage }) {


    return (
        <div className="chat-window">
            <h2>Chat with {friend.name}</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.from}: </strong>{msg.text}
                    </div>
                ))}
            </div>
            <MessageInput onSendMessage={onSendMessage} />
        </div>
    )
}

export default ChatWindow;