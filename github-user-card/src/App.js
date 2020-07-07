import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import SearchForm from './components/SearchForm'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'christiano39',
      user: null,
    };
  }

  setUsername = newUsername => {
    this.setState({
      username: newUsername,
    })
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.username !== prevState.username) {
      axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  
  render() {
    if (!this.state.user){
      return <h2>Loading...</h2>
    }
    
    return (
      <div className="App">
        <SearchForm setUsername={this.setUsername} />
        {this.state.user && <UserCard user={this.state.user} />}
        {this.state.user && <Followers followersURL={this.state.user.followers_url} />}
      </div>
    );
  }
}

export default App;
