//description of skills, process, technologies used, a little about self
//discovery, design, development, launch, aftercare
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ftVis: {display: "block"},
      procVis: {display: "none"},
      ftState: {
        backgroundColor: "black",
        color: "white",
        border: "solid thin white"
      },
      procState: {
        backgroundColor: "white",
        color: "black",
        border: "none"
      },
      filledArr: [null, null, null, null, null, null, null, null, null]
    };
    this.ftClicked = this.ftClicked.bind(this);
    this.procClicked = this.procClicked.bind(this);
    window.self = this;
  }

  ftClicked() {
    this.setState({ftVis: {display: "block"}, procVis: {display: "none"}, ftState: {backgroundColor: "black", color: "white", border: "solid thin white"}, procState: {backgroundColor: "white", color: "black", border: "none"}});
  }

  procClicked() {
    this.setState({ftVis: {display: "none"}, procVis: {display: "block"}, ftState: {backgroundColor: "white", color: "black", border: "none"}, procState: {backgroundColor: "black", color: "white", border: "solid thin white"}});
  }

  componentDidMount() {

    document.querySelector(".aboutDiv").onmouseover = function() {document.querySelector(".abtbtn").style.color = "#8A8D8F";};
    document.querySelector(".aboutDiv").onmouseout = function() {document.querySelector(".abtbtn").style.color = "white";};

    window.onscroll = function() {
      myFunction();
      if (document.querySelector(".skills").getBoundingClientRect().top < 100 && document.querySelector(".skills").getBoundingClientRect().top > -600) {
          var matches = document.querySelectorAll(".filled");
          matches.forEach(function(match) {
            match.classList.add("transit");
          });
      }
      else {
        matches = document.querySelectorAll(".filled");
        matches.forEach(function(match) {
        match.classList.remove("transit");
      });
    }
  }

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";

      var element = document.querySelector('nav');
      var topPos = element.getBoundingClientRect().top;

      if(topPos <= 0) {
        document.querySelector(".flex-column").classList.add("fixed-header");
      }

      if(document.querySelector(".aboutsection").getBoundingClientRect().top >= 130){
        document.querySelector(".flex-column").classList.remove("fixed-header");
      }

    }

    var count = 0;
    document.querySelector(".dropdown").addEventListener("click", function () {
      if(count === 0) {
        document.querySelector(".dropdown-content").classList.add("reveala");
        count = 1;
      }
      else if (count === 1) {
        document.querySelector(".dropdown-content").classList.remove("reveala");
        count = 0;
      }
    });


    /*var arr = [100, 100, 95, 90, 90, 90, 90, 85, 65];
    var countArr = [0,0,0,0,0,0,0,0,0];
    var countpcArr = [0,0,0,0,0,0,0,0,0];
    var elArr = [".htmlp", ".cssp", ".jqueryp", ".javascriptp", ".reactp", ".nodep", ".pythonp", ".mongodbp", ".sqlp"];
    document.querySelector(".aboutservices").onmouseover = function(arr, countArr, countpcArr, elArr) {
      for(var z=0; z<=100; z++){
          for(var i=0; i < arr.length; i++) {
            document.querySelector(elArr[i]).innerHTML(countpcArr[i]);
            if(countArr[i] < arr[i]) {
              countArr[i]++;
            }
            for(var y = 0; y < countArr.length; y++) {
              countpcArr[y] = countArr[y] + "%";
            }
            console.log(countpcArr);
          }

        }

    }; */

}

  render() {
    return (
      <div>
        <nav className="flex-column">
          <a href="#home"><button className="navbtns hmbtn" >HOME</button></a>
          <a href="#about"><button className="navbtns abtbtn" >ABOUT</button></a>
          <a href="#contact"><button className="navbtns cntctbtn" >CONTACT</button></a>
          <a href="/projects"><button className="navbtns prtbtn" >SHOP</button></a>
          <div className="dropdown">
            <button className="dropbtn"><i className="fas fa-bars"></i></button>
            <div className="dropdown-content">
              <hr />
              <a className="dropa" href="#home">HOME</a>
              <hr />
              <a className="dropa" href="#about">ABOUT</a>
              <hr />
              <a className="dropa" href="#contact">CONTACT</a>
              <hr />
              <a className="dropa" href="/projects">SHOP</a>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>
        </nav>
        <div className="aboutDiv">
        <a className="none" href="/home#about" id="about">text</a>
        <h1 className="header aboutheader">About</h1>
        <hr className="abouthr"/>
        <div className="aboutsection">
          <div className="aboutself">
            <div className="description" data-aos="fade-left" data-aos-duration="3000">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div><img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/></div>
          </div>
          <div className="aboutservices">
            <div className="skills" data-aos="fade-right" data-aos-duration="3000">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="vrtclcrsl" data-aos="fade-up" data-aos-duration="3000">
              <div className="btndv">
                <button id="ft" className="ftbtn" style={this.state.ftState} onClick={this.ftClicked}>PLACEHOLDER</button>
                <button id="proc" className="procbtn" style={this.state.procState} onClick={this.procClicked}>PLACEHOLDER</button>
              </div>
              <div className="features" style={this.state.ftVis}>
                <div className="vrtitm">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="vrtitm">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="vrtitm">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="vrtitm">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="process" style={this.state.procVis}>
                <div className="vrtitm">
                  <p>Sed risus pretium quam vulputate dignissim. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.</p>
                </div>
                <div className="vrtitm">
                  <p>Sed risus pretium quam vulputate dignissim. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.</p>
                </div>
                <div className="vrtitm">
                  <p>Sed risus pretium quam vulputate dignissim. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.</p>
                </div>
                <div className="vrtitm">
                  <p>Sed risus pretium quam vulputate dignissim. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default About;
