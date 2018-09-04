import React, { Component } from 'react';
import HPNav from '../nav/company/HPnav';
import {connect} from 'react-redux';
import {CardElement,injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev){
    let {token} = await this.props.stripe.createToken({name:'Name'});
    let response = await fetch('http://localhost:8000/api/subscribe',{
      method:'POST',
      headers:{'Content-Type':'text/plain'},
      body:token.id
    });
    if(response.ok)  console.log({'Purchase complete!':response})
  }


  render() {
    return(
    <div className='checkout'>
      <p>Subscribe?</p>
      <CardElement/>
      <button onClick={this.submit}>Subscribe!</button>
    </div>
    );
  }
}


const mapStateToProps = state => {
  return {
  };
};

export default injectStripe(CheckoutForm);

