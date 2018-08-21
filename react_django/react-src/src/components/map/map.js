/*global google*/
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import JSNav from '../nav/job-seeker/JSnav';

export class MapView extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    render() {
      return (
        <div>
          <JSNav />
        <Map google={this.props.google}
            //MAP INITIAL VIEW SETTINGS
            initialCenter={{
            lat: 38.6872,
            lng: -96.3301 }}
            zoom={4}
            //MAP STYLING
            style ={{
            borderRadius: '400px',
            boxShadow: "0px 0px 5px 0px white",
            margin: 'auto',
            marginTop: '40px',
            width: '80%',
            height: '80%',
            zIndex: '0',
            maxWidth: '750px',
            maxHeight: '750px',}}
            onClick={this.onMapClicked}>
          <Marker 
            //HARD CODED MARKER FOR VIEW TEST
                  onClick={this.onMarkerClick}
                  style={{height: '30px', width: '30px'}}
                  name={'Current location'}
                  title={'Mark Stesney'}
                  position={{lat: 36.0822, lng: - 94.1719}}
                  icon={{
                    scaledSize: new google.maps.Size(20,20),
                    url: 'https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png',
                }}
                />
                          <Marker 
            //HARD CODED MARKER FOR VIEW TEST
                  onClick={this.onMarkerClick}
                  style={{height: '30px', width: '30px'}}
                  name={'Current location'}
                  title={'Mark Stesney'}
                  position={{lat: 38.0822, lng: - 92.1719}}
                  icon={{
                    scaledSize: new google.maps.Size(20,20),
                    url: 'https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png',
                }}
                />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div className="infowindow">
              {/* HARD CODED USER INFO FOR VIEW TEST */}
                <h1>Mark Stesney</h1>
                <h3>Full Stack Developer</h3>
                <img style={{height: '80px', width: '80px'}} src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.15752-9/38888153_317978778775083_2197696995420798976_n.png?_nc_cat=0&oh=c52ca8210461dc7d758c9bafb920cd71&oe=5BFE50F6'/>
                <h5>Fayetteville, AR</h5>
                <button>View Profile</button>
              </div>
          </InfoWindow>
        </Map>
        </div>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("AIzaSyCgH5g6dMBMsGI65zfp0Gxn8hJ_9C1DdMw")
  })(MapView)