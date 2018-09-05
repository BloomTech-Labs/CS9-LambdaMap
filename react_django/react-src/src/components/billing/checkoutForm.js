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

  componentDidMount(){
    console.log(this.props);
  }

  async submit(ev){
    let response = await this.props.stripe.createToken({name:'Name'})
    .then(res=>{
      this.props.subscribe({stripeToken:res.token.id, email:this.props.hirePartner.user.email})
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
    hirePartner: state.hirePartner
  };
}




export default injectStripe(connect(mapStateToProps,{subscribe})(CheckoutForm));

