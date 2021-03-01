import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="login__info">
        <h4>Sigin-In</h4>
        <h6>Email or mobile phone number</h6>
        <input type="text" />
        <button>Continue</button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
