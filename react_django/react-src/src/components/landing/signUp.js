import React, { Component } from 'react'

export default class signUp extends Component {
  constructor() {
    super()
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
            <select>
              <option value="job seeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </label>
          {/*
          conditional render if either one is selected hereimport React, { Component } from 'react'
