import React, { Component } from 'react'


const replacer = (key, value) => {
  if(key === 'submitAttempts') return undefined;
  else return key;
}

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
      accountType: {
        student: false,
        business: false
      },
      businessName: '',
      submitAttempts: 0,
      error: {
        login: false,
        password: false,
        email: false,
        attempts: false
      }
    }
    this.startingState = JSON.parse(JSON.stringify(this.state, replacer));
  }

  handleTextChange = event => {
    this.setState({[target.event.name]: target.event.value})
  }

  handleSubmit = event => {
   

    //TODO SET UP LOCKED OUT ACCOUNT PAGE
    // const timeStart = new Date.now()
    // const timeCheck = new Date.now()
    // localStorage.setItem('loginTimer', timeStart)

    event.preventDefault();
    const {
      firstname,
      lastname,
      username,
      password1,
      password2,
      pwd,
      acountType,
      attempts,
      businessName,
      passwordMatched,
    } = this.state;
   const pwdRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
    this.setState({attempts: attempts + 1});
    if(attempts > 3  - timeCheck){
     this.setState({!error: attempts})
      this.props.history.push('https://herokuapp.com/api/lockedOut')
    if (password1.test(password2) && password1.match(pwdRequirements) !== null) {
        this.setState({passwordMatched: true, pwd: password1})
      if(accountType.student && accountType.business === false) {
        axios
        .post('https://herokuapp.com/api/users/${this}',
        { firstname,
        lastname,
        username,
        pwd,
      })
      }
      else if(accountType.business && accountType.  === false) {

      }
      // TODO:
      /*
      add the user
      */
     axios
     .post('https://herokuapp.com/api/users/${this}', 
     { firstname,
     lastname,
     username,
     pwd,
   })
      else if (password.test(password2) && password1.match(passwordMatched) === null) {
        this.setState({passwordMatched: true})
        alert(`You must enter a password that has the following requirements: 
        at least 8 characters
        1 capital letter
        1 symbol ie. (?=.*?[#?!@$%^&*-])
        1 lowercase letter
`)
      }
      if(accountType.s
     
      .then(res => 
        this.props.history.push('/login')
    )
      .catch(err => console.log(error.message))
    }
    else {

    }
   
    }
    
    
  }
  }  render() {
    return (
      <label>
      Account Type:
      <input type="radio" value="Student" onSubmit={this.handleSubmit}>Student</input>
      <input type="radio" value="Business" onSubmit={this.handleSubmit}>Business</input>
      </label>
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
         
          {/*
          conditional render if either one is selected hereimport React, { Component } from 'react'
