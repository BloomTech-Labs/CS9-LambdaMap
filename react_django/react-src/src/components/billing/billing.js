import React, { Component } from 'react';
import { CardElement, injectStripe} from 'react-stripe-elements';
import HPNav from '../nav/company/HPnav';
import './billing.css';

class Billing extends Component{
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
      }
    
      async submit(e) {
        // let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
        //   body: token.id
        });
      
        if (response.ok) console.log("Purchase Complete!")
    }
    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;
        return(
        <div>
            <HPNav />
            <div  className="billing">
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={this.submit}>Sumbit Payment</button>
            </div>
        </div>
        )
    }
}

export default injectStripe(Billing);