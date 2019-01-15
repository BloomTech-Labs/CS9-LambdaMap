import React, {Component} from 'react';
import Signin from '../components/Signin/';
import Layout from '../components/Layout/';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <Layout>
        <p>Hello world</p>
      </Layout>
    )
  }
}

export default Index;
