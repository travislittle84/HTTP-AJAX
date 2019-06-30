import React from 'react'
import { Link, Route } from 'react-router-dom'

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