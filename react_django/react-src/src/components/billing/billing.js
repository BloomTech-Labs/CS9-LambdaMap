import React, {Component} from 'react';
import {Elements,StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';

class Billing extends Component{
  render(){
    return(
    <StripeProvider apiKey="">
      <div className="billing">
        <h1>billing</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
    );
  }
}

export default Billing;
