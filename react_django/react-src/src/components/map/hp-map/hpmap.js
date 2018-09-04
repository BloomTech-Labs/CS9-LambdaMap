/*global google*/
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import HPNav from "../../nav/company/HPnav";
import "./map.css";
import { get_clients, get_listings } from "../../../actions/index";
import { connect } from "react-redux";
import defaultuser from "./defaultuser.svg";
import compass from "../../compass.png";
import { Link } from "react-router-dom";

class HPMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      client: {},
      jobListing: [],
      job_listing: {},
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount = () => {
    this.props.get_clients();
    this.props.get_listings();
  };

  onMarkerClick = id => {
    this.props.clients.clients.filter(c => {
      if (c.ID === id) {
        this.setState({ client: c });
      }
    });
  };

  onMarkerClickHp = id => {
    this.props.jobListing.job_listings.filter(j => {
      if (j.ID === id) {
        this.setState({ job_listing: j });
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
              initialCenter={{
                lat: 38.6872,
                lng: -96.3301
              }}
              zoom={4}
              style={{
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 0px white",
                margin: "100px",
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
              {this.props.jobListing.job_listings.map((job_listing, i) => (
                <Marker
                  key={i}
                  onClick={() => {
                    this.onMarkerClickHp(job_listing.ID);
                  }}
                  style={{ height: "30px", width: "30px" }}
                  name={job_listing.company_name.city}
                  title={job_listing.company_name}
                  position={{ lat: job_listing.lat, lng: job_listing.lng }}
                  icon={{
                    scaledSize: new google.maps.Size(20, 20),
                    url: "https://png.icons8.com/small/1600/filled-building.png"
                  }}
                />
              ))}
            </Map>
          </div>
          {/* Links to client profile */}
          <Link
            to={`/jsprofile/${this.state.client.ID}`}
            key={this.state.client.ID}
            className="profile-link"
            style={{ textDecoration: "none" }}
          >
            <div className="mini-profile">
              <img
                src={defaultuser}
                className="JSprofilepic"
                alt="Job Seeker"
              />
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
          </Link>

          {/* Links to Hire Partner Profile */}
          <Link
            to={`/hpview/${this.state.job_listing.ID}`}
            key={this.state.job_listing.ID}
            className="profile-link"
            style={{ textDecoration: "none" }}
          >
            <div className="mini-profile2">
              <img
                src={defaultuser}
                className="JSprofilepic"
                alt="Job Seeker"
              />
              <p>{this.state.job_listing.company_name}</p>
              <p>
                {this.state.job_listing.city}
                {this.state.job_listing.state}
              </p>
              <p>{this.state.job_listing.phone}</p>
              <p>{this.state.job_listing.email}</p>
            </div>
          </Link>
        </div>
        <Link to="/hplanding">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    clients: state.clients,
    client: state.client,
    jobListings: state.jobListings,
    jobListing: state.jobListing,
    fetchingListings: state.fetchingListings,
    fetchingClients: state.fetchingClients,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { get_clients, get_listings }
)(
  GoogleApiWrapper({ apiKey: "AIzaSyAgToUna43JuFhMerOH1DO1kzgCOR7VWm4" })(
    HPMapView
  )
);
