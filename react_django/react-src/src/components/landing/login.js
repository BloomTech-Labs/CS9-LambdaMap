import React, { Component } from 'react'
// import 'jwt' from 'jsonwebtokens'
import axios from 'axios';
require('dotenv').config();
export default class Login extends Component {
  constructor() {
    super();
      this.state = {
        username: '',
        pwd: '',
        submitting: false,
        submitted: false,
        error: false,
        attempts: 0,
        reset: false,
      }
        this.startingState = {...this.state};
      }
      resetForm = () => {
        this.setState(this.startingState);
      }
      handleTextChange = event => {
        this.setState({[event.target.name]: event.target.value})
      }
      handleSubmit = event => {
        const {
          username,
          password,
        } = this.state
        event.preventDefault();
        if(username && password) {
          // jwt.verify()
          axios
          .post(`http://127.0.0.1:8000/api/user/${localStorage.getItem('User','_id')}`, { username, password })
          .then(res => {
            console.log('User Successfully Logged In!')
            this.props.history.push('/profile')
          })
          .catch(err => {
            console.log(err.message);
            this.props.history.push('/')
          })
        }
      }
  render() {
    return (
      <div>
        <div className='signIn-container'>
        <h1> Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" 
            name="username" placeholder="Enter your username" 
            value={this.state.username}
            onChange={this.handleTextChange}
            />
          </label>
          <label>
            Password:
            <input type="password" name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleTextChange}
            />
          </label>
            <h1> Or... Sign in with</h1> <button> Google </button>
            <br/>
            <br/>
          <button type="submit">
            Sign In!
          </button>
          <button onClick={this.resetForm}>
          Cancel
          </button>
        </form>
    </div>
  </div>
)}
}


// TODO
// CLEAN UP AND ERROR / LOGIC UNCOMMENT

// this.setState({submitted: false, submitting: false, error: true})
 // this.exception = ["attempts"]

 // this.startingState = JSON.parse(JSON.stringify(this.state, keyReplacer))

// const keyReplacer = (key, value) => {

// keyException.forEach(exeption => {

// if(key === `${exception}`) return undefined;

// else return key;

// })

// return key;

// }

// const valueReplacer = (key, value) => {

// valueException.forEach(exception => {

// if(value === `${exception}`) return undefined;

// else return value;

// })

// return value;

// }

// error,

// attempts,

// reset

    
    /*
    
    TODO: 
    
    loading and error messges
    
    submission
    
    testing
    
    */

// this.setState({attempts: attempts + 1});

// if (attempts > 3) {

// this.setState({error: true});

//TO DO modal && set timeout

// Push timer into the login form and null out fields until time is up

// console.log('too many attempts to log in, try again later')

// }

// const { username, password } = userdata;

// const token = localStorage.getItem('jwt', 'token')

    
    // handleGoogleSignIn = () => {
      
      // console.log('Signing in with Google')
      
      // axios.get('https://google/signin/api/placeholder/:userId')
      
      // .then(res => {
        
        // console.log('Signed in with Google successfully!')
        
        // this.props.history.push(`https:herokuapp.com/api/:localStorange.getItem('userId')`)
        
        // })
        
        // .catch( err => {
          
          // console.log('Sign in with Google unsuccessful!')
          
          // this.props.history.push('/signin')
          
          // })
          
          //}
          
