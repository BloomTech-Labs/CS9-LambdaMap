import React, {Component} from 'react';
import Signin from '../components/Signin/';
import Layout from '../components/Layout/';
import PinnedJobs from '../components/PinnedJobs/';
import Recommended from '../components/RecommendedJobs/';


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
        <h3>Pinned Positions</h3>
        <PinnedJobs/>
        <div>
          <h3>Recommended Jobs</h3>
          <Recommended/>
        </div>
      </Layout>
    )
  }
}

export default Index;
