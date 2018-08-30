/*global google*/
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import HPNav from "../../nav/company/HPnav";
import "./map.css";
import { get_clients } from "../../../actions";
import { connect } from "react-redux";
import defaultuser from "./defaultuser.svg";

class HPMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      client: {},
      hiring_partners: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount = () => {
    this.props.get_clients();
  };

  onMarkerClick = id => {
    console.log(this.props);
    this.props.clients.clients.filter(c => {
      if (c.ID === id) {
        this.setState({ client: c });
        console.log(this.state.c);
      }
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <HPNav />
        <div className="main-container">
          <div className="map">
            <Map
              className="mapstuff"
              google={this.props.google}
              //MAP INITIAL VIEW SETTINGS
              initialCenter={{
                lat: 38.6872,
                lng: -96.3301
              }}
              zoom={4}
              //MAP STYLING
              style={{
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 0px white",
                margin: "100px",
                // marginTop: '40px',
                width: "80%",
                height: "80%",
                zIndex: "0",
                maxWidth: "1200px",
                maxHeight: "750px"
              }}
              onClick={this.onMapClicked}
            >
              {this.props.clients.clients.map((client, i) => (
                <Marker
                  key={i}
                  onClick={() => {
                    this.onMarkerClick(client.ID);
                  }}
                  style={{ height: "30px", width: "30px" }}
                  name={client.city}
                  title={client.first_name}
                  position={{ lat: client.lat, lng: client.lng }}
                  icon={{
                    scaledSize: new google.maps.Size(20, 20),
                    url:
                      "https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png"
                  }}
                />
              ))}
            </Map>
          </div>
          <div className="mini-profile">
            <img src={defaultuser} className="JSprofilepic" alt="Job Seeker" />
            <p>
              {this.state.client.first_name}
              {this.state.client.last_name}
            </p>
            <p>
              {this.state.client.city}
              {this.state.client.state}
            </p>
            <p>{this.state.client.phone}</p>
            <p>{this.state.client.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    client: state.client,
    hiring_partners: state.hiring_partners,
    fetchingClients: state.fetchingClients,
    fetchingHPs: state.fetchingHPs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { get_clients }
)(
  GoogleApiWrapper({ apiKey: "AIzaSyAgToUna43JuFhMerOH1DO1kzgCOR7VWm4" })(
    HPMapView
  )
);
