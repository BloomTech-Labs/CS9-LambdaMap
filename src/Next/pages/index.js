import React, {Component} from 'react';
import Signin from '../components/Signin/';
import Layout from '../components/Layout/';
import PinnedJobs from '../components/PinnedJobs/';

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
        <PinnedJobs/>
      </Layout>
    )
  }
}

export default Index;
