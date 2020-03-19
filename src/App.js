import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/anim/entrances.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import * as R from 'react-bootstrap';
import MemberCard from './MemberCard';



function HeadNav() {
	return (<Navbar bg="light" expand="lg" className="pl-5 pr-5 pt-2 pb-2 shadow-sm">
		<Navbar.Brand href="#home"><img src="images/logo.svg" width="150px" /> </Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="/db/public/login"> DAPO Database </Nav.Link>
				<NavDropdown title="Download" id="basic-nav-dropdown">
					<NavDropdown.Item href="https://play.google.com/store/apps/details?id=com.vlct.dapo_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Google Play Store</NavDropdown.Item>
					<NavDropdown.Item href="/downloads/com.vlct.dapo.apk">Direct</NavDropdown.Item>
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
					<a href="https://play.google.com/store/apps/details?id=com.vlct.dapo_app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" height="200px">
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
	const about = (
		<R.Container fluid className="p-sm-5 about-this-project text-center">
			<h1 className="pb-3"> Data-driven Project, for the people </h1>
			<p> Project DAPO is a community project whose data will be used to enumerate mosquito hotspots in order to effectively prevent the increasing dengue cases in the Philippines. </p>
		</R.Container>
	);

	const video = (
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
	);

	return [about, video];
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
							<p>Project Adviser: Bob Mathew D. Sunga, MS-DSE <br />
		Email: bobdsunga@i.xs.edu.ph </p>
							<hr />
							<p>Web Developers:
		<br />
		mchlbataller@gmail.com<br />
		nirio@gmail.com </p>
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


class Members extends React.Component {
	constructor(props) {
		super(props);
		this.state = { members: [] };
	}

	componentDidMount() {
		this.setState({
			members: [
				{
					name: "Marx Chrys Del Mundo",
					role: "Android Developer",
					imgsrc: "https://trello-attachments.s3.amazonaws.com/5e00ca58a842a27e5670adce/5e269438d9dcd963a8409ec9/d50e6893b3bf13a367d71dfa06f06a94/received_2298367050480432.jpeg"
				},
				{
					name: "Bob Mathew D. Sunga",
					role: "Project Adviser",
					imgsrc: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t31.0-8/s960x960/13908881_10208853903536319_8398366693428001309_o.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_eui2=AeHMToSsaOSoK78RKWFXPkQ0QA2r5DNQjd_QYxLtk72BU6r4mT_YHcVHXBpHM3zRtP5At1782EoCppn_UAHOeiYx-eM2PPdISfTQxKOWC_nTEw&_nc_ohc=dLw_bUX9xFcAX9B6rQg&_nc_ht=scontent.fmnl4-2.fna&_nc_tp=7&oh=0ca8dac87716c7c7cdf0484417d3cbe4&oe=5E9A8C33"
				},
				{
					name: "Montgomery Van Brussel Toft",
					role: "User Interface/Experience",
					imgsrc: "https://trello-attachments.s3.amazonaws.com/5e268f98cb6fab7e653c390b/600x600/da74283bd9feb1144d3e8346f55f659a/received_1691995317582359.jpeg.jpg"
				},
				{
					name: "Roniel Duka",
					role: "Database Manager",
					imgsrc: "https://trello-attachments.s3.amazonaws.com/5e1ed3820804150dd63cb8eb/387x419/686d48c4df05d21d5b79a7bf8cd523c9/received_1919294598321066.jpeg.jpg"
				},
				{
					name: "Nico Del Rosario",
					role: "Web Developer",
					imgsrc: "https://trellox-attachments.s3.amazonaws.com/5e00ca58a842a27e5670adce/5e1f3197cc09b070084bfaec/2a5ea5f4db3654e691afd071e7af5a1d/image.png"
				},
				{
					name: "Franz Joshua Dela Cruz",
					role: "User Interface/Experience",
					imgsrc: "https://trello-attachments.s3.amazonaws.com/5e2ecfe0c5dd117536b1ff61/526x526/63f8b87b502037c28d53221c8ddbba4d/Dela_Cruz.png"
				},
				{
					name: "Michael C. Bataller",
					role: "Web Developer",
					imgsrc: "https://trello-attachments.s3.amazonaws.com/5e2675c43cd56e6ed7d3b641/542x543/d48701c3042e64f8ffccc8baaa396dbb/IMG_20191112_093453_-_Michael_Bataller.JPG.jpg"

				},
				{
					name: "Deanna Jeanne Caloracan",
					role: "Project Manager/Documentation",
					imgsrc: "https://trello-attachments.s3.amazonaws.com/5e1ed1303c1caf03e49a6587/769x769/c666aa27a713297c7869accc99909e5d/image.jpeg.jpg"
				}
			]
		})
	}

	render() {
		return (
			<React.Fragment>
				<section id="team" class="pb-5">
					<div class="container">
						<h5 class="section-title h1">OUR TEAM</h5>
						<div class="row">
							{this.state.members.map((x =>
								<MemberCard name={x.name} role={x.role} imgsrc={x.imgsrc} />
							))}
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

const App = () => {
	return (
		<React.Fragment>
			<HeadNav />
			<Header />
			<Body />
			<Members />
			<FooterPage />
			<Footer />

		</React.Fragment>
	)
}
export default App;

