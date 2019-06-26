import React from 'react';
import axios from 'axios';

import ListFriends from './components/ListFriends'
import AddFriendForm from './components/AddFriendForm'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log("Error code", error)
      })
  }

  addFriend = newFriend => {
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
  }
  
  submitHander = event => {
    event.preventDefault();
    this.addFriend({
      name: this.state.newFriend.name,
      age: this.state.newFriend.age,
      email: this.state.newFriend.email
    })
  }

  changeHandler = event => {
    this.setState({
      newFriend: event.target.value
    })
  }

  render(){    
    const  items  = this.state.friends
    return (
      <div className="App">
        <ListFriends friends={items}/>
        <form onSubmit={this.submitHander} >
                <input 
                    id="newFriendName"
                    type="text"
                    value={this.state.newFriend.name}
                    placeholder="new friend name"
                    onChange={this.changeHandler}                
                />
                <input 
                    id="newFriendAge"
                    type="text"
                    value={this.state.newFriend.age}
                    placeholder="age"
                    onChange={this.changeHandler}                
                />
                <input 
                    id="newFriendEmail"
                    type="text"
                    value={this.state.newFriend.email}
                    placeholder="email"
                    onChange={this.changeHandler}                
                />
                <button type="submit">Add Friend</button>
            </form>
      </div>
    );
  }
  
}

export default App;
