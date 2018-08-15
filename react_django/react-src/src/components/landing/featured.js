import React, { Component } from 'react'

export default class featured extends Component {
  render() {
    return (
      /*
      picture
      bio
      contact info
      portfolio/github
      */

      /*
      features:
      fetch featured users / from database
      users: display their pic, bio, name, contact info, portfolio links/github,
      companies: display their company name, pic, work bio, new openings
      map them out on the page to be reused in other pages
      */
     <React.Fragment>
      <div> (localStorage.getItem('seeker._id'))
        <img src={this.props.avatarLink} alt={`${localStorage.username}'s picture`} />
        <h1>{ this.props.firstname + " " + this.props.lastname }</h1>
        <h2>{ this.props.bio }</h2>

      </div>
      </React.Fragment>
    )
  }
}
