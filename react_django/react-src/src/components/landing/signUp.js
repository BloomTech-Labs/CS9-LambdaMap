import React, { Component } from 'react'
import axios from 'axios';




export default class signUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password1: '',
      password2:'',
      passwordMatched: false,
      pwd: '',
      student: false,
      business: false,
      businessName: '',
      error: {
        login: false,
        password: false,
        email: false,
        attempts: false
      },
      submitAttempts: 0,
    }

    this.startingState = {...this.state};
  }

  handleTextChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleRadioSubmit = event => {
    event.preventDefault();
    this.setState({[event.target.name]: !event.target.value})
  }
  resetForm = event => {
    this.setState(this.startingState)
  }
  handleSubmit = event => {
    event.preventDefault();
    // SETTING UP VARIABLES
    const {
      firstname,
      lastname,
      username,
      password1,
      password2,
      pwd,
      acountType,
      error,
      attempts,
      businessName,
      student,
      business,
      passwordMatched,
    } = this.state;

   const pwdRequirements = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$')
    // TODO INCREASE MIN CHARS
    this.setState({attempts: attempts + 1});
    if(attempts > 3) {
      this.setState({error: !attempts})
      return this.props.history.push('/lockedOut')
    }
    else if(password1 === password2 && password1.match(pwdRequirements) !== null) {
        this.setState({passwordMatched: true, pwd: password1});
        if(student) {
          localStorage.setItem('AccountType', 'student');
          const keyException = ['business', 'businessName', 'error', 'password1', 'password2']
          const keyReplacer = (key, value) => {
            keyException.forEach(exception => {
              if(key === exception) return undefined;
              else return key;
            })
            return key;
          }
          const studentData = JSON.parse(JSON.stringify(this.state, keyReplacer))
          axios
          .post('/register', studentData)
          .then(res => {
            console.log(res.data);
            console.log('Account Successfully Created!');
            return this.props.history.push('/login')
          })
          .catch(err => {
            console.log(err.message);
            alert('Please try again!')
            this.setState(this.startingState)
            this.props.history.push('/register')
          })
        }
      else {
        localStorage.setItem('AccountType', "business")
        const keyException = [ 'student', 'error', 'password1', 'password2' ]
        const keyReplacer = (key, value) => {
          keyException.forEach(exception => {
            if(key === exception) return undefined;
            else return key;
          })
          return key;
        }
        const businessData = JSON.parse(JSON.stringify(this.state, keyReplacer))
        axios
        .post(`/register}`, businessData )
        .then(res => {
          console.log(res.data);
          console.log('Account Successfully Created!');
          return this.props.history.push('/login')
        })
        .catch(err => {
          this.setState(error.login = true)
          alert('Please try again!')
          this.setState(this.startingState)
          this.props.history.push('register')
        });
      }
    }
    else {
      if(password1 === password2 && password1.match(pwdRequirements) === null) {
        alert(`You must enter a password that has the following requirements:
        at least 16 characters
        1 capital letter
        1 symbol ie. (?=.*?[#?!@$%^&*-])
        1 lowercase letter
        `);
        this.setState(this.startingState);
        this.props.history.push('/register');
    }
  }
}
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>
      Account Type:
      <input type="radio" name="student" value={this.state.student} onClick={this.handleRadioClick} />
      Student
      <input type="radio" name="business" value={this.state.business} onClick={this.handleRadioClick} />
      Business
      </label>
      <h1> Sign Up</h1>
        <label>
            First Name:
            <input type="text" name="firstname" onChange={this.handleTextChange}placeholder="Enter your first name" value={this.state.firstname}/>
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" placeholder="Enter your last name" onChange={this.handleTextChange} value={this.state.lastname}/>
          </label>
          <label>
            Username:
            <input type="text" name="username" placeholder="Enter your username" onChange={this.handleTextChange} value={this.state.username}/>
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
          <button type="button" onClick={this.resetForm}>Cancel</button>
          </form>
          </div>
    )
  }
}