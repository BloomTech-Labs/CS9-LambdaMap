import React, {Component} from 'react';
import css from './styles.less';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      focus: false,
      focus2: false,
      strength: 0,
      strengthPhrase: "Minimum six characters are required.",
      match: false,
      username: "",
      email: "",
      password: "",
      password2: "",
      error: false,
    };
  }
  handleToggle = (e) => {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  addActiveInput = (e) => {
    e.target.offsetParent.classList.add(css.inputActive);
    if (e.target.name === "password") {
      this.setState({focus: true});
    } else if (e.target.name === "password2") {
      this.setState({focus2: true});
    } else if (e.target.name === "username" && this.state.error) {
      this.setState({error: false});
    }
  }
  removeActiveInput = (e) => {
    if(!e.target.value){
      e.target.offsetParent.classList.remove(css.inputActive);
      if (e.target.name === "password") {
        this.setState({focus: false});
      } else if (e.target.name === "password2") {
        this.setState({focus2: false});
      }
    }
  }
  handlePasswordMatch = (e) => {
    if (this.state.password === this.state.password2) {
      this.setState({match: true});
    } else {
      this.setState({match: false});
    }
  }
  handleSubmit = () => {
    const {username, email, password} = this.state;
    if (this.state.match && this.state.strength > 40) {
      axios.post('http://127.0.0.1:8000/api/user/register', {username: username, email: email, password: password})
        .then(res => {
          Router.push({
            pathname: '/signin',
          })
        })
      .catch(err => {
        this.setState({error: true});
      })
    }
  }
  handlePasswordStrength = (e) => {
    let sum = 0;
    let temp;
    const value = e.target.value;
    const length = value.length;
    temp = value.match(/[A-Z]/g);
    const upper = temp === null ? "" : temp;
    temp = value.match(/[a-z]/g);
    const lower = temp === null ? "" : temp;
    temp = value.match(/[0-9]/g);
    const nums = temp === null ? "" : temp;
    temp = value.match(/[!@#$%^&*()\.\,><]/g)
    const special = temp === null ? "" : temp;
    if (length >= 12) {
      sum += 25;
    } else if (length < 12 && length >= 8) {
      sum += 10;
    } else if (length >= 3 && length <= 7) {
      sum += 5;
    }
    sum += lower.length >= 6 ? 10 : lower.length >= 3 ? 5 : 0;
    sum += upper.length > 1 ? 15 : upper.length > 0 ? 5 : 0;
    sum += nums.length >= 3 ? 25 : nums.length > 0 ? 10 : 0;
    sum += special.length > 1 ? 25 : special.length === 1 ? 10 : 0;
    const phrase = sum === 100 ? "good luck remembering this password." : sum >= 80 ? "weird flex but ok." : sum >= 60 ? "Above Average." : sum >= 40 ? "Average." : sum >= 25 ? "Mediocre." : sum >= 5 && length >= 6 ? "Weak sauce." :"Minimum six characters are required.";
    this.setState({strength: sum, strengthPhrase: phrase}, this.handlePasswordMatch);
  }
  render() {
    let strength = {
      width: `${this.state.strength}%`,
      background: this.state.strength <= 20 ? '#DC3253' : this.state.strength <= 40 ? '#EC6935' : this.state.strength <= 60 ? '#ECCE35' : this.state.strength <= 80 ? '#ECE635' : '#26A762',
    }
    let password2 = {
      color: this.state.match ? "green" : "red",
    }
    return (
      <div className={css.Container}>
        <div className={css.Container__Inner}>
          <header>
            <h3>SIGN UP</h3>
          </header>
          <div className={`${css.error} ${this.state.error ? css.activeError : ''}`}>User name already exists</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={css.Container__InputContainer}>
              <label htmlFor="UserName">User Name</label>
              <input name="username" value={this.state.username} onChange={this.handleInput} id="UserName" type="text" onFocus={this.addActiveInput} onBlur={this.removeActiveInput}/>
            </div>
            <div className={css.Container__InputContainer}>
              <label htmlFor="email">Email</label>
              <input name="email" value={this.state.email} onChange={this.handleInput} id="email" type="email" onFocus={this.addActiveInput} onBlur={this.removeActiveInput}/>
            </div>
            <div className={css.Container__InputContainer}>
              <label htmlFor="password">Password</label>
              <input name="password" id="password" value={this.state.password} onKeyUp={this.handlePasswordStrength} onChange={this.handleInput} type={this.state.showText ? "text" : "password"} onFocus={this.addActiveInput} onBlur={this.removeActiveInput}/>
              {this.state.focus ? <div className={css.Container__StrengthMeterContainer}>
                <div className={css.StrengthMeter} style={strength}></div>
              </div> : null}
              <p>{this.state.strengthPhrase}</p>
            </div>
            <div className={css.Container__InputContainer}  style={{margin: '0'}}>
              <label htmlFor="password2">Confirm Password</label>
              <input name="password2" id="password2" value={this.state.password2} onChange={this.handleInput} onKeyUp={this.handlePasswordMatch} type={this.state.showText ? "text" : "password"} onFocus={this.addActiveInput} onBlur={this.removeActiveInput}/>
              {this.state.focus2 ? <p style={password2}>{this.state.match ? "Match!" : "Passwords do not match."}</p> : null}
            </div>
            <input type="checkbox" name="showText" onClick={this.handleToggle}/> Show Password
            <div className={css.Container__Submit}>
              <button onClick={this.handleSubmit}>Submit</button>
              <div className={css.Container__OtherLogin}>
                <div className={css.Container__OtherButton}>
                  <button className={css.blue}>Sign up with Facebook</button>
                </div>
                <div className={css.Container__OtherButton}>
                  <button className={css.orange}>Sign up with Google</button>
                </div>
              </div>
            </div>
            <div className={css.Container__Footer}>
              <p>Already have an account? <Link prefetch href="/signin">Sign in</Link></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Index;
