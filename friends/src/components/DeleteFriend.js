import React from 'react'
import axios from 'axios'

function DeleteFriend(props) {
    
    const removeFriend = () => {
        const del = props.friend.id

        axios.delete(`http://localhost:5000/friends/${del}`)
            .then(response => {
                props.updateFriends(response.data)
            })
            .catch(error => {
                console.log("error while deleting:", error)
            })
    }
    
    return (        
        <span onClick={removeFriend}>X</span> 
    )
}

export default DeleteFriend