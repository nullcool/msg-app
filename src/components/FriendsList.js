
function FriendsList({ friends, onSelectFriend }) {

    return (
        <div className="friend-list">
            <h2>Friends List</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id} onClick={() => onSelectFriend(friend)}>
                        {friend.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FriendsList;