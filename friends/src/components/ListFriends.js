import React from 'react'

function ListFriends(props) {
    if(props.friends.length > 0) {
        console.log("props", props.friends)
    }
      
    return (
    <div>
        {props.friends.map((item) => (
            <p>{item.name}</p>
        ))}
    </div>
    );
}

export default ListFriends;