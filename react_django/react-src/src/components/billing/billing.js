import React, {Component} from 'react';
import {Elements,StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';
import {connect} from 'react-redux';
import {subscribe} from '../../actions';

class Billing extends Component{

  render(){
    return(
    <StripeProvider apiKey="null">
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

const mapStateToProps = state =>{
  return{
    
  };
}

export default connect(mapStateToProps, {subscribe})(Billing);
