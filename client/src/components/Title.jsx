//background image of circuit board
//title with animation
//navbar, home, about, testimonials, contact, portfolio
import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: {backgroundImage: null, backgroundSize: "cover"}, name: "", link: ""};
  }

  componentDidMount() {

    document.querySelector(".titleDiv").onmouseover = function() {document.querySelector(".hmbtn").style.color = "#8A8D8F";};
    document.querySelector(".titleDiv").onmouseout = function() {document.querySelector(".hmbtn").style.color = "white";};

  }
  render() {
    return (
      <div className = "titleDiv">
        <a className="none" href="/home#home" id="home">text</a>

        <h1 className ="titletext" id="name">Lorem Ipsum</h1>
        <h3 className = "titletext">Lorem Ipsum Dolor</h3>

        <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
        <p>PRODUCT SHOWCASE DESCRIPTION</p>
        <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
        <p>PRODUCT SHOWCASE DESCRIPTION</p>
        <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
        <p>PRODUCT SHOWCASE DESCRIPTION</p>
      </div>
    );
  }
}
export default Title;
