import React from 'react'

function ListFriends(props) {
      
    return (
    <div>
        {props.friends.map((item) => (
            <p>{item.name}</p>
        ))}
    </div>
    );
}

export default ListFriends;