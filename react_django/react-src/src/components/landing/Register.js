handleTextChange = event => {
  this.setState({[event.target.name]: event.target.value})
  if(password1 === password2) {
    this.setState({password: password2})
  }
}
handleSubmit = event => {
  const {
  username,
  password,
  email,
  first_name,
  last_name,
  remote,
  relocate,
  linkedin,
  github,
  twitter,
  codepen,
  portfolio_picture,
  city,
  state,
  personal_website,
  phone,
  about
  } = info;