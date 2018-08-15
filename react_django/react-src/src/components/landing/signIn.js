import React, { Component } from 'react'
import axios from 'axios';

const replacer = (key, value) => {
  if(key === 'attempts') return undefined;
  else return key;
}
export default class signIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      pwd: '',
      submitting: false,
      submitted: true,
      error: false,
      attempts: 0,
      reset: false,
    }
    this.startState = JSON.parse(JSON.stringify(this.state, replacer))
  }
  /*
  TODO: 
  loading and error messges
  submission
  testing
  */
componentWillMount() {
  
}
  resetForm = () => {
    this.setState(this.startState)
  }

  // handleGoogleSignIn = () => {
  //   console.log('Signing in with Google')
  //   axios.get('https://google/signin/api/placeholder/:userId')
  //   .then(res => {
  //     console.log('Signed in with Google successfully!')
  //     this.props.history.push(`https:herokuapp.com/api/:localStorange.getItem('userId')`)
  //   })
  //   .catch( err => {
  //     console.log('Sign in with Google unsuccessful!')
  //     this.props.history.push('/signin')
  //   })
  }
  handleSubmit = event => {
    event.preventDefault();
    const { username, pwd } = this.state;
    const token = localStorage.getItem('jwt')
    axios
    .post('https://lambda-map.herokuapp.com/login', { username, pwd })
    .then(res => {
      this.setState({submitting: true})
      console.log(res);
      console.log(res.data.username)
      console.log(res.data.pwd)
      console.log('User Successfully Logged In!')
      this.props.history.push('/')
    })
    .catch(err => console.log(err.message))
    this.setState({submitted: false, submitting: false, error: true})
    this.history.push(`'https://lambda-map.herokuapp.com/company/${localStorage.getItem('userId')}`)
  }
  handleTextChange = event => {
    this.setState({[event.target.name]: event.target.value})
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
