import React, { Component } from 'react';
import HPNav from '../nav/company/HPnav';
import {connect} from 'react-redux';
import {subscribe} from '../../actions';
import {CardElement,injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state={subscribed:false,end_date:undefined}
  }

  componentWillMount(){
    let end_date = this.props.hirePartner.user.subscription_end_date;
    let today = new Date();
    let year = end_date.slice(0,4)
    //january starts at 0
    let month = parseInt(end_date.slice(5,7)) -1
    let day = end_date.slice(8,10)
    let end = new Date(year,month,day)
    // subscription is active
    if(end >= today){
      this.setState({subscribed:true,end_date:end.toString()})
    }
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
    console.log(this.state.subscribed,this.state.end_date);
    if(this.state.subscribed){
      return(
          <div className='checkout'>
            <h1>Your subscription ends on {this.state.end_date}</h1>
            <p>Add another month?</p>
            <CardElement/>
            <button onClick={this.submit}>Subscribe!</button>
          </div>
          );
    }
    else{
      return(
        <div className='checkout'>
          <h1>Your subscription is inactive</h1>
          <p>Subscribe for one month?</p>
          <CardElement/>
          <button onClick={this.submit}>Subscribe!</button>
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

