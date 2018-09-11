import React, { Component } from 'react';
import HPNav from '../nav/company/HPnav';
import {connect} from 'react-redux';
import {subscribe} from '../../actions';
import {CardElement,injectStripe} from 'react-stripe-elements';
import "./billing.css";

class CheckoutForm extends Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state={
      subscribed:this.props.hirePartner.user.subscribed,
      end_date:new Date(this.props.hirePartner.user.subscription_end_date)
    }
  }

  async submit(ev){
    let response = await this.props.stripe.createToken({name:'Name'})
    .then(res=>{
      this.props.subscribe({stripeToken:res.token.id, email:this.props.hirePartner.user.email})
      .then(res=>{
        alert('Successfully Subscribed!');
        this.setState({subscribed:true,end_date:new Date(res.successful)});
        this.props.hirePartner.user.subscribed = this.state.subscribed;
        this.props.hirePartner.user.subscription_end_date = this.state.end_date;
      })
      .catch(err=>{
        alert('Failed to Subscribe',err);
        console.log(err);
      });
    })
    .catch(err=>{
      alert("error:",err);
    });
  }

  render() {
    if(this.state.subscribed){
      return(
          <div className='checkout'>
            <h3>Your subscription ends on {this.state.end_date.toString().slice(0,15)}</h3>

            <p>Add another month?</p>
            <CardElement/>
            <button className="button"  onClick={this.submit}>Subscribe!</button>
          </div>
          );
    }
    else{
      return(
        <div className='checkout'>
          <h3>Your Subscription is Currently Inactive</h3>
          <p>Subscribe for one month for $30.00</p>
          <CardElement/>
          <button className="button" onClick={this.submit}>Subscribe!</button>
        </div>
        );
    }
  }
}

const mapStateToProps = state =>{
  return {
    hirePartner: state.hirePartner
  };
}




export default injectStripe(connect(mapStateToProps,{subscribe})(CheckoutForm));

