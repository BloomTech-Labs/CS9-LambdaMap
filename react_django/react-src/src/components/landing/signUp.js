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
          conditional render if either one is selected here
          */}
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email address"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password"
            />
          </label>
          <h1> Or... Sign Up with</h1> <button> Google </button>
          <br/>
          <br/>
          <button>Sign Up!</button>
          <button>Cancel</button>
        </form>
        </div>
      </div>
    )
  }
}
