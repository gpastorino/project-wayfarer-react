import React from 'react';


// Components
import Container from 'react-bootstrap/Container'

// Style
import './ProfileMain.css';

const ProfileMain = props => {
  return(
    <Container id="profile-main" className="d-flex flex-row align-items-center justify-content-center">
      <div id="profile-nav" className="col-sm-3 d-flex flex-column align-items-center justify-content-start">
        <a id="overviewBtn" class="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-user"></i>Overview</a>
        <a id="reviewsBtn" class="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-comment-alt"></i>Posts</a>
        <a id="reviewsBtn" class="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="far fa-edit"></i>Update Info</a>
        <a id="reviewsBtn" class="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-camera"></i>Update Picture</a>
        <a id="reviewsBtn" class="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-key"></i>Change Password</a>
      </div>
      <div id="profile-main-content" className="col-sm-9 d-flex flex-column align-items-center justify-content-start">
        <div id="given-names-wrapper" className="container d-flex flex-row align-items-center justify-content-center mt-1 mb-5">
          <div id="first-name-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
            <h4>Sarah</h4>
            <small>First Name</small>
          </div>
          <div id="last-name-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
            <h4>Kerrigan</h4>
            <small>Last Name</small>
          </div>
          <div id="email-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
            <h4>sarah@blizzard.com</h4>
            <small>Email</small>
          </div>
        </div>
        <div id="user-location-wrapper" className="container d-flex flex-row align-items-center justify-content-center mb-5">
          <div id="city-wrapper" className="container col-sm-3 d-flex flex-column align-items-start justify-content-center">
            <h4>San Francisco</h4>
            <small>City</small>
          </div>
          <div id="state-wrapper" className="container col-sm-9 d-flex flex-column align-items-start justify-content-center">
            <h4>California</h4>
            <small>State</small>
          </div>
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center mb-5">
          <div id="username-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
            <h4>queen_sarah</h4>
            <small>Username</small>
          </div>
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <div id="member-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
            <h4>January 1st, 2020</h4>
            <small>Member Since</small>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileMain;