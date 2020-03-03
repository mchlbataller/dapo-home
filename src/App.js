import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/anim/entrances.css'
import { Navbar, Jumbotron } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import * as R from 'react-bootstrap';



function Head() {
  function HeadNav() {
    return (<Navbar bg="light" expand="lg" className="pl-5 pr-5 pt-2 pb-2 shadow-sm">
      <Navbar.Brand href="#home"><img src="images/logo.svg" width="150px" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Download" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Google Play Store</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Direct</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  };

  function Header() {
    return (
      <R.Container fluid className="header">
        <R.Row>
          <R.Col sm>
            <h1>Project DAPO</h1>
            <p>A project concerned about tracking and spotting mosquito <br />whereabouts and infections through crowdsourced data.        </p>
            <p >Be part of our community! Download the app now.</p>
            <a href="https://play.google.com/store/apps/details?id=com.vlct.dapo_app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img class="ps-btn" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="250px" />
            </a>
          </R.Col>
          <R.Col sm className="text-center">
            <img src="images/phone.png" alt="dapo-app" className="fade-in-bottom pt-1" width="250px" />
          </R.Col>
        </R.Row>
      </R.Container>
    );
  };

  function Body() {
    return (
      <R.Container fluid className="p-sm-5 video">
          <R.Row className="p-sm-5 text-center">
            <R.Col sm><iframe className="youtube" src="https://www.youtube.com/embed/BstKtTG-UM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </R.Col>
            <R.Col sm className="caption text-left my-auto">
              <h2>Prevention is better than cure.
              </h2>
              <p>By proactively preventing disease such as dengue, we can save millions of lives just by tapping on our phones.
                <br /><br />Be part of a data-driven community.
              </p>
            </R.Col>
          </R.Row>
      </R.Container>

    )
  }

  function FooterPage() {
    return (
      <footer color="blue" className="font-small pt-4 mt-4 bg-dark text-light">
        <R.Container fluid className="text-center text-md-left">
          <R.Row>
            <R.Col md="6">
              <h5 className="title">About</h5>
              <p>Project DAPO is a project spearheaded by VLCT.</p>
            </R.Col>
            <R.Col md="6">
              <h5 className="title">Contact Us</h5>
              <li className="list-unstyled">
                <p>Email: mchlbataller@gmail.com</p>
              </li>
            </R.Col>
          </R.Row>
        </R.Container>
      </footer >
    );
  };

  function Footer() {
    const copyright = (<div className="container-fluid p-3 bg-dark text-light text-center">
      Copyright ©2020, Project DAPO: Data Analytics on Pathological Outbreaks. All Rights Reserved.
  </div>);
    const bnshosting = (<div className="container-fluid bg-warning p-2 text-center">
      Powered by <a href="https://bnshosting.net">BNS Hosting Solutions</a>
    </div>);
    return [copyright, bnshosting];
  };

  return (
    <React.Fragment>
      <HeadNav />
      <Header />
      <Body />
      <FooterPage />
      <Footer />
    </React.Fragment>
  );
};

function App() {
  return (
    <React.Fragment>
      <Head />
    </React.Fragment>
  );
}

export default App;

