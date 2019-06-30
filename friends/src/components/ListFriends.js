import React from 'react'
import { Link, Route } from 'react-router-dom'

import CreateFriend from './CreateFriend'
import DeleteFriend from './DeleteFriend'

function ListFriends(props) {
      
    return (
    <div>
        {props.friends.map((friend) => (
            <div>
                <Link to={`/friends/${friend.id}`} key={friend.id}>
                    {friend.name}
                </Link>
                <DeleteFriend updateFriends={props.updateFriends} friend={friend}/>
            </div>
        ))}
        <CreateFriend updateFriends={props.updateFriends} friends={props.friends} />
        
    </div>
    );
}

export default ListFriends;