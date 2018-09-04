import React, { Component } from 'react';
import HPNav from '../nav/company/HPnav';
import StripeCheckout from 'react-stripe-checkout';

class Billing extends Component{
    onToken = (token) =>{
      fetch('https://localhost:8000/api/subscribe/',{
        method:'POST',
        body:JSON.stringify(token),
      }).then(response=>{
        response.json().then(data=>{
          alert(`test ${data.email}`);
        });
      });
    }
    render() {
    return(
    <StripeCheckout token={this.onToken} stripeKey='pk_test_1p5B423kMIc50yASX6BjZtio' />
    );
  }
}

export default Billing
