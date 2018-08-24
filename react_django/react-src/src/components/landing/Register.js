import React, { Component } from 'react'
import axios from 'axios';

const apiUrl = "http://127.0.0.1:8000/api/";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      remote: false,
      relocate: false,
      linkedin: '',
      github: '',
      twitter: '',
      codepen: '',
      password1: '',
      password2: '',
      password: '',
      portfolio_picture: '',
      city: '',
      state: '',
      personal_website: '',
      phone: '',
      about: '',
      client: false,
      hire_partner: false
      }
    this.startingState = Object.assign({}, this.state);
  }

  handleTextChange = event => {
    this.setState({[event.target.name]: event.target.value});
    if (this.state.password1 === this.state.statepassword2) {
      this.setState({password: this.state.password2})
    }
  }

  handleRadioChange = event => {
    event.preventDefault();
    if (event.target.name === "client") {
      this.setState({client:true, hire_partner: false});
    }
    else if (event.target.name === "client") {
      this.setState({hire_partner: true, client: false});
    }
    else if (event.target.name === "remote") {
      this.setState({remote: true});
    }
    if (event.target.name === "relocate") {
      this.setState({relocate: true})
    }
    else {
      return null;
    }
  }

  handleCancel = event => {
    this.setState(this.startingState)
  }

  componentDidMount() {
    console.log(this.state);
  }
  handleSubmit = event => {
    event.preventDefault();
    // SETTING UP VARIABLES
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
      hire_partner,
      client,
      personal_website,
      phone,
      about
      } = this.state;
      // FOR A STRONG PASSWORD
    const pwdRequirements = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$');

    if (password && password.match(pwdRequirements) !== null) {
      this.setState({passwordMatched: true});
      if (client) {
        localStorage.setItem('AccountType', 'client');
        axios
        .post('http://127.0.0.1:8000/api/create-client/', this.state)
        .then(res => {
          console.log('Client being created', res.data.first_name);
          console.log('Account Successfully Created!');
          return this.props.history.push('/login/')
        })
        .catch(err => {
          console.log('from server', err);
          alert('Please try again!')
          this.setState({password1: ''}, {password2: ''});
        })
      }
      else {
        localStorage.setItem('AccountType', 'hire_partner')
        axios
        .post('http://127.0.0.1:8000/api/create-hire-partner/', this.state)
        .then(res => {
          console.log('Hire Partner being created', res.data.first_name);
          console.log('Account Successfully Created!');
          return this.props.history.push('/login/')
        })
        .catch(err => {
          console.log(err.message)
          alert('Please try again!')
          this.setState({password1: ''}, {password2: ''})
        });
      }
    }
    else if (this.state.password && this.state.password1.match(pwdRequirements) === null) {
        alert(`You must enter a password that has the following requirements:
        at least 16 characters
        1 capital letter
        1 symbol ie. (?=.*?[#?!@$%^&*-])
        1 lowercase letter
        `);
        this.setState({ password1: ''}, {password2: ''});
        this.props.history.push('/register/');
      }
  }
  render() {
    console.log(this.state);
    console.log(this.state.student);
    console.log(this.state.business);
    console.log('from render', Error.message)
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>
      I am a
      <input type="radio" name="client" onChange={this.handleRadioChange} checked={this.state.client === true ? true : false}/>
      Student
      <input type="radio" name="hire_partner" onChange={this.handleRadioChange} checked={this.state.hire_partner === true ? true : false}/>
      Business
      </label>
      <h1> Register </h1>
        <label>
            First Name:
            <input type="text" name="first_name" onChange={this.handleTextChange}placeholder="Enter your first name" value={this.state.first_name}/>
          </label>
          <label>
            Last Name:
            <input type="text" name="last_name" placeholder="Enter your last name" onChange={this.handleTextChange} value={this.state.last_name}/>
          </label>
          <input type="radio" name="remote" onChange={this.handleRadioChange} value={this.state.remote} checked={this.state.remote === true}/>
            I am open to work remotely
            <input type="radio" name="relocate" onChange={this.handleRadioChange} value={this.state.relocate} checked={this.state.relocate === true}/>
            I am open to relocate
            <label>
            LinkedIn:
            <input type="text" name="linkedin" placeholder="Enter your LinkedIn URL" onChange={this.handleTextChange} value={this.state.linkedin}/>
          </label>
          <label>
            Github:
            <input type="text" name="github" placeholder="Enter your Github URL" onChange={this.handleTextChange} value={this.state.github}/>
          </label>
          <label>
            Twitter:
            <input type="text" name="twitter" placeholder="Enter your Twitter URL" onChange={this.handleTextChange} value={this.state.twitter}/>
          </label>
          <label>
            Codepen:
            <input type="text" name="codepen" placeholder="Enter your Codepen URL" onChange={this.handleTextChange} value={this.state.codepen}/>
          </label>
          <label>
            Portfolio Picture:
            <input type="text" name="portfolio_picture" placeholder="Enter your Picture URL" onChange={this.handleTextChange} value={this.state.portfolio_picture}/>
          </label>
          <label>
            City
            <input type="text" name="city" placeholder="Enter your current city" onChange={this.handleTextChange} value={this.state.city}/>
          </label>
          <label>
            State:
            <input type="text" name="state" placeholder="Enter your current state" onChange={this.handleTextChange} value={this.state.state}/>
          </label>
          <label>
            Personal Website
            <input type="text" name="personal_website" placeholder="Enter your personal website url" onChange={this.handleTextChange} value={this.state.personal_website}/>
          </label>
          <label>
            Phone:
            <input type="text" name="phone" placeholder="Enter your phone number" onChange={this.handleTextChange} value={this.state.phone}/>
          </label>
          <label>
            Tell us about yourself!
            <textarea value={this.state.about} name="about" onChange={this.handleTextChange}>
              Go ahead, spill the beans! :) 
              </textarea>
          </label>
          <label>
            Password:
            <input type="password" name="password1" placeholder="Enter your password" onChange={this.handleTextChange} value={this.state.password1}/>
          </label>
          <label>
            Confirm Password:
            <input type="password" name="password2" placeholder="Enter your password again" onChange={this.handleTextChange} value={this.state.password2}/>
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email address" onChange={this.handleTextChange} value={this.state.email}/>
          </label>
          <button type="submit">Submit</button> 
          <button type="button" onClick={this.handleCancel}>Cancel</button>
          </form>
          </div>
      )
    }
  }
