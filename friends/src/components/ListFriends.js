import React from 'react'
import { Link } from 'react-router-dom'

import Friend from './Friend'
import EditFriend from './EditFriend'
import CreateFriend from './CreateFriend'

function ListFriends(props) {
      
    return (
    <div>
        {props.friends.map((friend) => (
            <Link to={`/friends/${friend.id}`} key={friend.id}>
                <p>{friend.name}</p>
            </Link>
            
        ))}
        <CreateFriend updateFriends={props.updateFriends} friends={props.friends} />
    </div>
    );
}

export default ListFriends;