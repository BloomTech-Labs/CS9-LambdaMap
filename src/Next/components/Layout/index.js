import React, { Component } from 'react';
import css from './styles.less';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={css.Container}>
        <header>
          <div className={css.Container__ImageContainer}>
            <img src="/static/images/controller_sm.png" alt="user thumbnail"/>
          </div>
          <h1>Welcome back, Username</h1>
          <div className={css.Container__OptionsContainer}>
            <div className={css.OptionsContainer__Button}>
              <p>Signout</p>
            </div>
          </div>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Layout;
