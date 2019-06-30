import React from 'react'
import axios from 'axios'

class Friend extends React.Component {
    constructor(){
        super();
        this.state ={
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        const friend = this.props.friends.find(i => String(i.id) === this.props.match.params.id)
        if (!friend) {
            return <div>Loading Friend</div>
        }
        this.setState({
            name: friend.name,
            age: friend.age,
            email: friend.email
        })
    }

    changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    editFriend = event => {
        event.preventDefault();
        
        const id = this.props.match.params.id;
        const { name, age, email } = this.state
        const payload = {name, age, email}

        axios.put(`http://localhost:5000/friends/${id}`, payload)
        .then((response) => {
            this.props.updateFriends(response.data)
            console.log("friend edited", response.data[response.data.length - 1])
        })
        .catch((error) => {
            console.log("an error", error)
        })
    }
    
    render(){
        return (
            <div>
                EDIT FRIEND
                <h1>{this.state.name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Email: {this.state.email}</p>
                <div>
                    <form onSubmit={this.editFriend} >
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
                        <button type="submit">Edit Friend</button>
                    </form>
                </div>
            </div>
        )
    } 
}

export default Friend;