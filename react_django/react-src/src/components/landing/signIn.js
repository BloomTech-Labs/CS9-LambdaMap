import React, { Component } from 'react'
import axios from 'axios';
export default class signIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      submitting: false,
      submitted: true,
      signedIn: false,
      loading: false,
      loaded: true,
      error: false
    }
    this.startingState = Object.assign({}, this.state)
  }
  /*
  TODO: 
  loading and error messges
  submission
  testing
  */
  resetForm = () => {
    this.setState(this.startingState)
  }
  handleSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    axios
    .post('http://database/api/placeholder/login', {username, password})
    .then(res => {
      this.setState({submitting: true})
      console.log(res);
      console.log(res.data)
      console.log('User Successfully Logged In!')
      this.props.history.push('/home')
    })
    .catch(err => console.log(err.message))
    this.setState({submitted: false, submitting: false, error: true})
  }
  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div className='signIn-container'>
        <h1> Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email address" value={this.state.email}
            onChange={this.handleTextChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleTextChange}/>
          </label>
          <h1> Or... Sign in with</h1> <button> Google </button>
          <br/>
          <br/>
          <button>Sign In!</button>
          <button onClick={this.resetForm}>Cancel</button>
        </form>
        </div>
      </div>
    )
  }
}
