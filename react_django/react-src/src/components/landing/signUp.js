import React, { Component } from 'react'

const keyReplacer = (key, value) => {
  keyException.forEach(exeption => {
    if(key === `${exception}`) return undefined;
    else return key;
  })
  return key;
}

const valueReplacer = (key, value) => {
  valueException.forEach(exception => {
    if(value === `${exception}`) return undefined;
    else return value;
  })
  return value;
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
      passwordMatched,
    } = this.state;
   const pwdRequirements = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')

    this.setState({attempts: attempts + 1});
    if(attempts > 3) {
      this.setState({error: !attempts})
      return this.props.history.push('https://herokuapp.com/api/lockedOut')
    }
    else if(password1.test(password2) && password1.match(pwdRequirements) !== null) {
        this.setState({passwordMatched: true, pwd: password1});
      
        if(accountType.student) {
        //
        localStorage.setItem('AccountType', "student")
        const keyExeption = [accountType.business, businessName, error]
        const studentData = JSON.parse(JSON.stringify(this.state, keyReplacer))
        axios
        .post('https://lambda-map.herokuapp.com/register', studentData)
        .then(res => {
          console.log(res.data);
          console.log('Account Successfully Created!');
          return this.props.history.push('https://herokuapp.com/api/login')
        })
        .catch()
      }
      else if(accountType.business) {
        
        localStorage.setItem('AccountType', "business")
        const keyExeption = [accountType.student, error]
        const businessData = JSON.parse(JSON.stringify(this.state, keyReplacer))
        axios
        .post('https://lambda-map.herokuapp.com/register', businessData )
        .then(res => {
          console.log(res.data);
          console.log('Account Successfully Created!');
          return this.props.history.push('https://herokuapp.com/api/login')
        })
        .catch(err => {
          this.setState(error.login = true)
          this.props.history.push('https://lambda-map.herokuapp.com/register')
        })
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
  }
    else if(password.test(password2) && password1.match(passwordMatched) === null) {
        alert(`You must enter a password that has the following requirements: 
        at least 8 characters
        1 capital letter
        1 symbol ie. (?=.*?[#?!@$%^&*-])
        1 lowercase letter
        ')
`   }
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

 render() {
    return (
      <label>
      Account Type:
      <input type="radio" name="accountType" value={this.state.accountType.student} onSubmit={this.handleSubmit}>Student</input>
      <input type="radio" name="accountType" value={this.state.accountType.business} onSubmit={this.handleSubmit}>Business</input>
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
    }
  }
          {/*
          conditional render if either one is selected hereimport React, { Component } from 'react'
