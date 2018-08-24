import React, { Component } from 'react'
// import 'jwt' from 'jsonwebtokens'
import axios from 'axios';
require('dotenv').config();

const apiUrl = "http://127.0.0.1:8000/api/";
export default class LogIn extends Component {
  constructor() {
    super();
      this.state = {
        email: '',
        password: '',
        client: false,
        hire_partner: false
      }
        this.startingState = Object.assign({}, this.state)
      }
      handleCancel = () => {
        this.setState(this.startingState);
      }
      handleTextChange = event => {
        this.setState({[event.target.name]: event.target.value})
      }
      handleRadioChange = event => {
        event.preventDefault();
        if(event.target.name === "client")
          this.setState({client:true, hire_partner: false});
        else {
          this.setState({hire_partner: true, client: false})
        }
      }
      handleSubmit = event => {
        event.preventDefault();
        // STATE PASSED DOWN
        const {
          email,
          password,
          client,
          hire_partner
        } = this.state
        if(email && password && hire_partner) {
          axios.post(`${apiUrl}/login-hire-partner/`, {email, password})
          .then(res => {
            console.log('Hire Partner successfully logged in!');
            console.log(res.data)
            this.props.history.push(`/`);
          })
          .catch(err => {
            console.log('Sorry there was an error', err.message);
            this.props.history.push('/login')
            this.setState(this.startingState);
          })
        }
        else if(email && password && client) {
          axios.post(`${apiUrl}/login-client/`, {email, password})
          .then(res => {
            console.log('Client successfully logged in!');
            console.log(res.data)
            this.props.history.push(`/`);
          })
          .catch(err => {
            console.log('Sorry there was an error', err.message);
            this.props.history.push('/login')
            this.setState(this.startingState);
          })
        }
        else alert(" No password and/or email entered!");
          this.props.history.push('/login')
          this.setState(this.startingState);
          }
        
  render() {
    return (
      <div>
        <div className='signIn-container'>
        <h1> Log In</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="radio" onChange={this.handleRadioChange} checked={this.state.client === true}>Client</input>
        <input type="radio" onChange={this.handleRadioChange} checked={this.state.hire_partner === true}>Hire Partner</input>
          <label>
            Email:
            <input type="text" 
            name="email" placeholder="Enter your email" 
            value={this.state.email}
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