import React from 'react'
// import ListFriends from './ListFriends'

function Friend(props) {
    return (
        <div>
            <p>{props.friend.name}</p>
        </div>
    )
}

export default Friend;