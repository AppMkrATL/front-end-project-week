import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Lambda Notes</h1>
      <h2> A place to keep track of all school notes </h2>
      <div className="loginAndSignup">
        <Link to="/login" className="button-login">
          Login
        </Link>
        <Link to="/signup" className="button-signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
