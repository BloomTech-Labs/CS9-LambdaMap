import React, { Component } from 'react';
import { CardElement, injectStripe} from 'react-stripe-elements';
import HPNav from '../nav/company/HPnav';
import './billing.css';

class Billing extends Component{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
      }
    
      async submit(ev) {
        // User clicked submit
      }
    render() {
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