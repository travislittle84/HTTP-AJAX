import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import ListFriends from './components/ListFriends'
import Friend from './components/Friend'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
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

  updateFriends = (friends) => {
    this.setState({ friends })
  }

  render(){
    
    const { friends } = this.state

    return (
      <div className="App">      
        <Route exact path="/" render={(props) => <ListFriends {...props} updateFriends={this.updateFriends} friends={friends}/>} />
        <Route path="/friends/:id" render={(props) => <Friend {...props} friends={friends} updateFriends={this.updateFriends}/>} />
      </div>
    );
  }
  
}

export default App;
