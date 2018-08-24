import React, { Component } from 'react'

export default class FtClient extends Component {
  constructor(){
    super();
    this.state = {
      header: '',
      first_name: '',
      last_name: '',
      clients:[]
    }
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/students/featuredstudent/:id'`, { username, firstname, lastname, bio, picture, avatar})
    .then(res => {
        const {firstname, lastname, bio, picture, avatar} = res.data
        this.setState(res.data)
    })
    .catch(err => {
      console.log(err.message)
      this.props.history.push('/featuredstudents/')
    })
  }

  handleAvatarClick = event => {
    console.log('redirecting to the user page')
    this.props.history.push(`/api/user/${localStorage.getItem('featuredUser', '_id')}`);
  }
  render() {
    return (
      <div>
        <h1>Featured Student</h1>
        <hr/>
        <h1>{this.props.firstname} {this.props.lastname}</h1>
        <div className="bio--container">
        <h1>About</h1>
        <img src={this.state.picture} href={`${this.state.firstname}' Picture`} onclick={this.handleAvatarClick}/>
        <p>Lorem ipsum dolor amet wayfarers biodiesel exercitation, bespoke seitan slow-carb ramps roof party iPhone mustache knausgaard veniam kombucha pitchfork. Put a bird on it locavore mustache austin fam gastropub, street art kitsch et flannel forage post-ironic gochujang. Offal trust fund mumblecore chillwave. In shabby chic ramps kickstarter. Gastropub chambray twee craft beer, subway tile ex tilde everyday carry.

    Literally blog listicle bicycle rights gastropub ullamco ut nisi selfies pitchfork prism tofu offal snackwave man braid. Copper mug excepteur slow-carb ugh franzen mlkshk bitters. Edison bulb cardigan vaporware messenger bag, flexitarian mumblecore before they sold out lo-fi hammock YOLO blue bottle sunt direct trade kitsch. Ethical bushwick vinyl organic edison bulb adipisicing. Four dollar toast truffaut marfa raw denim, banh mi yuccie ea chambray lorem skateboard squid pug nostrud seitan occupy. Deserunt kinfolk qui bespoke, actually palo santo flexitarian biodiesel cliche in literally.

    Church-key in etsy cliche fanny pack. YOLO elit iPhone selfies vegan kale chips cillum lyft. Stumptown 90's waistcoat, synth everyday carry banh mi sustainable. Voluptate intelligentsia sustainable letterpress. Pabst iceland art party tousled portland pok pok. XOXO esse cred, seitan keytar retro cliche pork belly consequat farm-to-table edison bulb portland chillwave. XOXO lyft anim hoodie man braid blog pariatur shaman adaptogen wolf.
</p>
        </div>
        <div>
        <h1>Contact Me!</h1>
        <img name="linkedin" src={} href="contact icon"/>
        <img name="github" src={} href="contact icon"/>
        <img name="website" src={} href="contact icon"/>
        <a>{this.state.resume}</a>
        </div>
        <div className="projects--container">
        <h1 translate >{this.state.firstname + "'s"} Projects!</h1>
          <div className="projects--mapped">
          {this.state.projects.map(item => {
            <div>
            <iframe src={this.state.item.link} frameBorder="2" width="400" height="300" name="projects" allowfullscreen translate sandbox>{}
            </iframe>
            </div>
          })}
          </div>
      </div>
      </div>
    )
  }
}


