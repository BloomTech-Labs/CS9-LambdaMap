import React, { Component } from 'react';
import HPNav from '../nav/company/HPnav';
import {connect} from 'react-redux';
import {subscribe} from '../../actions';
import {CardElement,injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev){
    let response = await this.props.stripe.createToken({name:'Name'})
    .then(res=>{
      this.props.subscribe(res.token.id)
    })
    .catch(err=>{
      console.log({'error creating token':err});
    });
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

const mapStateToProps = state =>{
  return {
  };
}




export default injectStripe(connect(mapStateToProps,{subscribe})(CheckoutForm));

