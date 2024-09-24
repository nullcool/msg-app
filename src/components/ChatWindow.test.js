import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatWindow from './ChatWindow';

describe('ChatWindow', () => {
    const friend = { name: 'Sara' };
    const messages = [
        { from: 'George', text: 'Hello!' },
        { from: 'You', text: 'Hi George!' },
    ];

    it('showws the chat window with friend name and messages', () => {
        render(<ChatWindow friend={friend} messages={messages} onSendMessage={() => { }} />);
        expect(screen.getByRole('heading', { name: /chat with sara/i })).toBeInTheDocument();

        messages.forEach(msg => {
            expect(screen.getByText(`${msg.from}:`)).toBeInTheDocument();
            expect(screen.getByText(msg.text)).toBeInTheDocument();
        });
    });

    it('calls onSendMessage when new message is sent', () => {
        const onSendMessageMock = jest.fn();
        render(<ChatWindow friend={friend} messages={messages} onSendMessage={onSendMessageMock} />);

        const input = screen.getByPlaceholderText('...');
        const sendButton = screen.getByRole('button', { name: /send/i });

        // console.log(input)
        fireEvent.change(input, { target: { value: 'Hey Sara!' } });

        fireEvent.click(sendButton);

        expect(onSendMessageMock).toHaveBeenCalledWith('Hey Sara!');
    });
});