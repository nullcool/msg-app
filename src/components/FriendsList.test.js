import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FriendsList from './FriendsList';

describe('FriendsList Component', () => {
    const friends = [
        { id: 1, name: 'George' },
        { id: 2, name: 'Helen' },
        { id: 3, name: 'Sara' },
    ];

    const onSelectFriend = jest.fn();

    beforeEach(() => {
        render(<FriendsList friends={friends} onSelectFriend={onSelectFriend} />);
    });

    it('shows friendds list correctly', () => {
        friends.forEach(friend => {
            expect(screen.getByText(friend.name)).toBeInTheDocument();
        });
    });

    it('calls onSelectFriend when a friend is clicked', () => {
        const saraItem = screen.getByText('Sara');
        fireEvent.click(saraItem);

        expect(onSelectFriend).toHaveBeenCalledWith(friends[2]);
    });
});