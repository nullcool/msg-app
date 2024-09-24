import { useState } from 'react';

function MessageInput({ onSendMessage }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onSendMessage(value);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='...' />
            <button type="submit">Send</button>
        </form>
    )
}

export default MessageInput;