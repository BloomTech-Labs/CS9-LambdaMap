import React, {Component} from 'react';
import css from './styles.less';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';
import {connect} from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      username: "",
      password: "",
      error: false,
      errorPhrase: "Something went wrong.",
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
    if (this.state.error) {
      this.setState({error: false});
    }
  }
  removeActiveInput = (e) => {
    if(!e.target.value){
      e.target.offsetParent.classList.remove(css.inputActive);
    }
  }
  handleSubmit = () => {
    const {username, email, password} = this.state;
    axios.post('http://127.0.0.1:8000/api/user/login', {username: username, password: password})
      .then(res => {
        this.props.dispatch({type: "LOGIN", payload: res.data});
        Router.push({
          pathname: '/dashboard',
        })
      })
      .catch((err) => {
        this.setState({errorPhrase: err.response.data.error, error: true});
      })
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
            <h3>SIGN IN</h3>
          </header>
          <div className={`${css.error} ${this.state.error ? css.activeError : ''}`}>{this.state.errorPhrase}</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={`${css.Container__InputContainer} ${css.marginBottom}`}>
              <label htmlFor="UserName">User Name</label>
              <input name="username" value={this.state.username} onChange={this.handleInput} id="UserName" type="text" onFocus={this.addActiveInput} onBlur={this.removeActiveInput}/>
            </div>
            <div className={css.Container__InputContainer}>
              <label htmlFor="password">Password</label>
              <input name="password" id="password" value={this.state.password} onChange={this.handleInput} type={this.state.showText ? "text" : "password"} onFocus={this.addActiveInput} onBlur={this.removeActiveInput}/>
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
              <p>Don't have an account? <Link prefetch href="/signup"><a>Sign up</a></Link></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state};
}
export default connect(mapStateToProps)(Index);
