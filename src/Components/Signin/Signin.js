import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import "./signin.css";

function Signin({ setLoggedin }) {
  return (
    <div className="loginContainer" style={{backgroundColor: "#E2E2E2"}}>
      <div className="loginHeader">
        <h1 className="loginHeader_h1">Board.</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="loginBar">
          <h3
            className="loginBar_h3"
            style={{ fontSize: "xx-large", margin: "0px" }}
          >
            Sign In
          </h3>
          <p className="loginBar_p">Sign in to your account</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="loginBar_btn">
            <FcGoogle size={'20px'} />
            <span className="loginBar_btn_span">Sign in With Google</span>
          </div>
          <div className="loginBar_btn">
            <AiFillApple color="#ADADAD" size={'20px'} />
            <span className="loginBar_btn_span">Sign in With Apple</span>
          </div>

          </div>
          <div className="loginBar_block">
            <label className="loginBar_block_label" style={{fontSize: 'large', marginTop: '10px'}}>Email Address</label>
            <input
              className="loginBar_input"
              type="email"
              placeholder="Enter Email Address"
              style={{backgroundColor: '#D0D0D0', color: 'black'}}
            ></input>
            <label className="loginBar_block_label" style={{fontSize: 'large', marginTop: '20px'}}>Password</label>
            <input
              className="loginBar_input"
              type="password"
              placeholder="Enter Password"
              style={{backgroundColor: '#D0D0D0', color: 'black'}}
            ></input>
            <p className="loginBar_block_forgot" style={{fontSize: 'medium', color: 'blue'}}>Forgot Password?</p>
            <button type="submit" className="loginBar_block_signin">
              <p>Sign In</p>
            </button>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>

          <p className="loginBar_register">
            Don't have an account?{" "}
            <span className="loginBar_register_link" style={{color: 'blue'}}>Register Here</span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
