import React, { Component } from 'react';

class About extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var profilepic = 'images/profile.jpg';
			var bio = this.props.data.bio;
			var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var phone = this.props.data.phone;
			var email = this.props.data.email;
			var resumeDownload = this.props.data.resumedownload;
		}

		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic" src={profilepic} alt="Hannah Chen Profile Pic" />
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>

						<p>{bio}</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<p className="address">
									<span>Email: {email}</span>
									<br />
									Or contact me via{' '}
									<a href={'https://www.linkedin.com/in/hannahchen2020/'}>LinkedIn.</a>
								</p>
							</div>
						</div>
					</div>
					<div className="columns download">
						<a href={resumeDownload} className="button">
							<i className="fa fa-download" />Resume
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
