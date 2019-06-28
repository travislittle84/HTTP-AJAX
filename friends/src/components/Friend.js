import React from 'react'
import EditFriend from './EditFriend';

function Friend(props) {

    const friend = props.friends.find(i => String(i.id) === props.match.params.id)
    console.log("friend", friend)
    if (!friend) {
        return <div>Loading Friend</div>
    }

    return (
        <div>
            {console.log("friend", friend)}
            FRIEND
            <p>{friend.name}</p>
            <EditFriend />
        </div>
    )
}

export default Friend;