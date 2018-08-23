import React, { Component } from 'react'
// import 'jwt' from 'jsonwebtokens'
import axios from 'axios';

const apiUrl = "http://127.0.0.1:8000/api/";
export default class LogIn extends Component {
  constructor() {
    super();
      this.state = {
        username: '',
        password: '',
        submitting: false,
        submitted: false,
        error: false,
        attempts: 0,
        reset: false,
        password1: '',
        password2: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        remote: '',
        relocate: '',
        linkedin: '',
        github: '',
        twitter: '',
        codepen: '',
        portfolio_picture: '',
        city: '',
        state: '',
        personal_website: '',
        phone: '',
        about: '',
      }
        this.startingState = Object.assign({}, this.state);
      }
      resetForm = () => {
        this.setState(this.startingState);
      }
      handleTextChange = event => {
        this.setState({[event.target.name]: event.target.value})
        if(password1 === password2) {
          this.setState({password: password2})
        }
      }
      handleSubmit = event => {
        const {
        username,
        password,
        email,
        first_name,
        last_name,
        remote,
        relocate,
        linkedin,
        github,
        twitter,
        codepen,
        portfolio_picture,
        city,
        state,
        personal_website,
        phone,
        about
        } = info;
        event.preventDefault();
        if(username && password) {
          axios.post(`${apiUrl}/users/`, info)
          .then(res => {
            console.log('Successfully logged in!');
            const userId = res.data.user._id;
            const setIt = localStorage.setItem('user', userId);
            this.props.history.push(`/user/${userId}`);
          })
          .catch(err => {
            console.log('Sorry there was an error', err.message);
            this.props.history.push('/login')
            this.setState(this.startingState);
          })
          // jwt.verify()
          // if(req.headers.Authorization.token) {
          //   const id = localStorage.getItem('user', '_id')
          //   axios
          //   .get(`${apiUrl}/${id}`, {username, password})
          //   .then(res => {
          //     console.log(`${username} succesfully logged in`);
          //     localStorage.setItem('token', res.data.token)
          //     this.props.history.push("/")
          //   })
          //   .catch(err => {
          //     console.log(err.message);
          //     alert(" We didn\'t understand your request, try again!")
          //     this.setState(this.startingState);
          //     this.props.history.push("/")
          //   })
          // }
        }
          else {
            alert(" No password and/or username entered!");
            this.props.history.push('/login')
            this.setState(this.startingState);
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
          


