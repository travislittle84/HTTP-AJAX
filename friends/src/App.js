import React from 'react';
import axios from 'axios';

import ListFriends from './components/ListFriends'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
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
    // TO DO DAY 2
  }
  
  createFriend = event => {
    event.preventDefault();
    const { name, age, email } = this.state
    const payload = {name, age, email}

    axios.post("http://localhost:5000/friends", payload)
      .then((response) => {
        this.setState({
          friends: response.data
        })
        console.log("Friend added", response.data)
      })
      .catch((error) => {
        console.log("an error", error.response.data.error)
      })
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){    
    return (
      <div className="App">
        <ListFriends friends={this.state.friends}/>
        <form onSubmit={this.createFriend} >
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
                <button type="submit">Add Friend</button>
            </form>
      </div>
    );
  }
  
}

export default App;
