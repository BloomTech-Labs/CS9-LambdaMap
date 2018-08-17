import React, { Component } from 'react'

export default class FeaturedCompaniesPage extends Component {
  constructor(){
    super();
    this.state = {
      header: '',
      businessname: '',
      picture:'',
      bio: [],
      contact: [],
      media: {
        type: {
          picture: false,
          video: false,
        },
        link: '',
        description: ''
      },
      philosophy: '',
      benefits: '',
      featuredOpenings: [],
      // featuredOpening:{
      //   id: ''
      //   role: '',
      //   fulltime: false,
      //   parttime: false,
      //   location: {
      //    remote: false,
      //    onsite: false,
      //  }
      //   description: '',
      //   datePosted: ''
      // }
      jobPostings: []
    }
  }

  componentWillMount() {
    axios.get(`http://127.0.0.1:8000/companies/featuredcompany/:id'`, {
      businessname,
      picture,
      bio,
      contact,
      media,
      philosophy,
      benefits,
      featuredOpenings,
      jobPosting,
    })
    .then(res => {
      const {
        businessname,
        picture,
        bio,
        contact,
        media,
        philosophy,
        benefits,
        featuredOpenings,
        jobPosting,
      } = res.data
      this.setState(res.data)
      console.log('data successfully fetched from featuredbusiness')
    })
    .catch(err => {
      console.log(err.message)
      this.props.history.push('/landing/')
    })
  }
  render() {
    return (
      <div className="featured--container">
        <h1 className="featured--header">Companies on Fire!</h1>
        <hr/>
        <h1 className="featured--header">{this.state.businessname}</h1>
        <div className="bio--container">
        <h1 className="featured--header">Bio</h1>
        <p className="featured--text">Lorem ipsum dolor amet wayfarers biodiesel exercitation, bespoke seitan slow-carb ramps roof party iPhone mustache knausgaard veniam kombucha pitchfork. Put a bird on it locavore mustache austin fam gastropub, street art kitsch et flannel forage post-ironic gochujang. Offal trust fund mumblecore chillwave. In shabby chic ramps kickstarter. Gastropub chambray twee craft beer, subway tile ex tilde everyday carry.
        </p>
        </div>
        <div className="featured--media--container">
        <h1 className="featured--text">Media & Press</h1>
        {
        this.state.media.type.picture
        ? this.state.media.picture.map(item => {
          <div className="featured--pics">
            <img src={this.state.media.link} alt={this.state.media.description} />
          </div>
        })
        : this.state.media.video.map(item => {
          <div>
          <iframe src={this.state.item.link} frameBorder="2" width="400" height="300" name="projects" allowfullscreen translate sandbox>{}
        </iframe>
        </div>
        })
      }
      </div>
    <div className="featured_perks--container">
        <h1 className="featured--header"> Perks!</h1>
        <h2 className="featured--subheader">Philosophy</h2>
        <p></p>
        <h2 className="featured--subheader">Stats</h2>
        <p></p>
        <h2 className="featured--subheader">Benefits</h2>
        <p></p>
    </div>
    <h1 className="featured--header">Hot Gigs!</h1>
    <div className="featured_company--openings_container">
        {this.state.featuredOpenings.map(item => {
          <div className="featured_company--openings">
            <a src={this.props.history.push(`/jobs/${this.state.jobPostings.id}`)}>
          <h2>{item.role}</h2>
          <h3>{item.location}</h3>
          <h3>{item.description}</h3>
            </a>
            </div>
        })}
    </div>
    </div>
    )}
}
// featuredOpening:{
      //   role: '',
      //   fulltime: false,
      //   parttime: false,
      //   remote: false,
      //   onsite: false,
      //   description: '',
      //   datePosted: ''
      // }
