import React from "react";
import NavBar from './Navbar';
import "./HomePage.css";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
const HomePage = () => {
  return (
    <div className="main_container">
        <NavBar />

        <div className="title">
            Kshetra Vridhi
        </div>
      <div className="container">
        <h2></h2>
        <div className="yo">
          <div className="fields">
            <p>Identity Verification</p>
          </div>
        </div>

        <div className="Too">
          <div className="fields">
            <p>Past Loan Details</p>
          </div>
        </div>

        <div className="zoo">
          <div className="fields">
            <p>Personal Details</p>
          </div>
        </div>
      </div>


      <div className="container2">
        <h2></h2>
        <div className="yo">
          <div className="fields">
            <p>Loan Application</p>
          </div>
        </div>

        <div className="Too">
          <div className="fields">
            <p>Land Details</p>
          </div>
        </div>

        <div className="zoo">
          <div className="fields">
            <p>Government Rules</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
