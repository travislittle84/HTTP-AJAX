import React from 'react'
import { Link } from 'react-router-dom'

import Friend from './Friend'

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