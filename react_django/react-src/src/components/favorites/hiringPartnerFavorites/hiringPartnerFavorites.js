import React,{Component} from 'react';
import HPnav from "../../nav/company/HPnav";
import axios from 'axios';

class hiringPartnerFavorites extends Component {

  constructor(props){
    super(props);
    this.state = {clients: []};
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/clients')
    .then(res=>{
      this.setState({clients:res.data.Clients});
      console.log("state: ");
      console.log(this.state.clients);
    })
    .catch(err=>{
      console.log(err);
    });
  }



  render(){
    return (
    <div>
      <HPnav />
      <div>
        {
          this.state.map( (e,i)=>{
            return(
            <div key={i}>
              <p>e.email</p>.
            </div>
            )
          })
        }

      </div>
    </div>
    )
  }
}


export default hiringPartnerFavorites;

