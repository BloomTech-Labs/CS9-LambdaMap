import React, { Component } from 'react'

export default class CompanyNav extends Component {
  render() {
    return (
      <div className="companyNav-container">
          <li>Home</li>
          <li>Map</li>
          <li>Job Seekers</li>
          <li>Favorites</li>
          <li>Messages</li>
          <li>Settings</li>
          <li>Billing</li>
      </div>
    )
  }
}
