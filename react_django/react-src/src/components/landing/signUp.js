import React, { Component } from 'react'

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
      password: '',
      accountType: {
        seeker: false,
        company: false
      },
      companyName: '',
      submitAttempts: 0
    }
    this.startingState = Object.assign({}, state);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({attempts: this.state.submitAttempts + 1});
    const { firstname, lastname, username, email, password, acountType } = this.state;
    this.setState({loading: true})
    
    axios.post('https://herokuapp.com/api/users/${this}')
    .then(

    )
    this.props.history.push('/login')
  }
  }  render() {
    return (
      <div>
        <div className='signUp-container'>
        <h1> Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
            First Name:
            <input type="text" name="firstname" placeholder="Enter your first name"/>
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" placeholder="Enter your last name"/>
          </label>
          <label>
            Account Type:
            <input type="radio">
              <option value="select">Select One</option>
              <option value="job seeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </input>
          </label>
          {/*
          conditional render if either one is selected hereimport React, { Component } from 'react'
