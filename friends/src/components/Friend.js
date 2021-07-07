import React from 'react'
import axios from 'axios'

class Friend extends React.Component {
    constructor(){
        super();
        const staticName = ''
        const staticAge = ''
        const staticEmail = ''
        
        this.state ={
            name: '',
            age: '',
            email: '',
            friend: {}
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
        this.staticName = friend.name
        this.staticAge = friend.age
        this.staticEmail = friend.email
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
            this.props.history.push(`/`)
        })
        .catch((error) => {
            console.log("an error", error)
        })
    }
    
    render(){
        return (
            <div>
                EDIT FRIEND                
                <h1>{this.staticName}</h1>
                <p>Age: {this.staticAge}</p>
                <p>Email: {this.staticEmail}</p>
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