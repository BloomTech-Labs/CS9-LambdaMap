import React, { Component } from 'react'

export default class signUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      accountTypeValue: {
        seeker: false,
        company: true
      }
    }
    this.startingState = Object.assign({}, state)
  }
  render() {
    return (
      <div>
        <div className='signUp-container'>
        <h1> Sign Up</h1>
        <form>
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
