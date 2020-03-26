//some email thing here

import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', msg: ''};
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMsg = this.onChangeMsg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(event, e) {
    this.setState({email: event.target.value});
  }

  onChangeMsg(event, e) {
    this.setState({msg: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    var formData = {
      email: this.state.email,
      msg: this.state.msg
    };

    axios.post('https://santiagoorellana.herokuapp.com/home', formData).then(res => {console.log(res.data)}).catch(err => console.log(err));
    /*window.location.href = "http://localhost:3000/compose";*/
  }

  componentDidMount() {
    document.querySelector(".contact").onmouseover = function() {document.querySelector(".cntctbtn").style.color = "#8A8D8F";};
    document.querySelector(".contact").onmouseout = function() {document.querySelector(".cntctbtn").style.color = "white";};
  }
  render() {
    return (
    <div className="contact">
      <a className="none" href="/home#contact" id="contact">text</a>
      <h1 className="contactheader header">Contact</h1>
      <hr />
          <div className="container main__container">
            <p>Phone Number: </p>
            <p>Email: </p>
            <p>Phone Number: </p>
            <p>Email: </p>
            <p>Feedback: </p>
            <p>General Inquiries</p>
          </div>
          <div className="footer">
            <footer> &copy; PLACEHOLDER. All Rights Reserved.</footer>
          </div>
      </div>
    );
  }
}
export default Contact;
