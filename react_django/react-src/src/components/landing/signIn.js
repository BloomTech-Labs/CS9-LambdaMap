import React, { Component } from 'react'

export default class signIn extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div className='signIn-container'>
        <h1> Sign In</h1>
        <form>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email address"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password"
            />
          </label>
          <h1> Or... Sign in with</h1> <button> Google </button>
          <br/>
          <br/>
          <button>Sign In!</button>
          <button>Cancel</button>
        </form>
        </div>
      </div>
    )
  }
}
