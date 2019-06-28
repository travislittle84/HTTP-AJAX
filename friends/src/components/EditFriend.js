import React from 'react'
import axios from 'axios'

class EditFriend extends React.Component {
    constructor() {
        super()
        this.state ={
            name: '',
            age: '',
            email: '',
        }
    }

    changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
// TO DO - CONVERT THIS TO AN EDIT COMPONENT 
    addFriend = event => {
        event.preventDefault();
        const { name, age, email } = this.state
        const payload = {name, age, email}

        axios.post("http://localhost:5000/friends", payload)
        .then((response) => {
            this.props.updateFriends(response.data)
            console.log("friend added", response.data[response.data.length - 1])
        })
        .catch((error) => {
            console.log("an error", error.response.data.error)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addFriend} >
                    <input 
                        name="name"
                        type="text"
                        value={this.state.name}
                        placeholder="new friend name"
                        onChange={this.changeHandler}                
                    />
                    <input 
                        name="age"
                        type="number"
                        value={this.state.age}
                        placeholder="age"
                        onChange={this.changeHandler}                
                    />
                    <input 
                        name="email"
                        type="text"
                        value={this.state.email}
                        placeholder="email"
                        onChange={this.changeHandler}                
                    />
                    {/* {!this.state.friends ? <button type="submit">Add Friend</button> : <button type="submit">Update Friend</button>}  */}
                    <button type="submit">Edit Friend</button>
                </form>
            </div>
        )
    }
    
}

export default EditFriend;