import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';


const SignInPage = () => {
 
  const history = useHistory(); 



  const handleLogin = () => {
   
    window.location.href = '/chat';
  };
  return (
    <div className="login-container">
      <div className="left-container">
        <div className="title">RFP document analyze assistant</div>
        <div className="subtitle">Retrieve similar RFPs on which your organization has already worked and their checklist answers.</div>
      </div>
      <div className="right-container">
        <div className='sign-up'>
        <h2>Sign In</h2>
        <label className="input-label">Email ID</label>
        <input className="email-input" type="text" placeholder="Enter your email" />
        <label className="input-label">Password</label>
        <input className="password-input" type="password" placeholder="Password" />
        <div className="password-links">
          <a className="signup-link" href="/register">Sign Up</a>
          <a className="reset-password-link" href="#resetpassword">Reset Password</a>
        </div>
       
        <div className="button-container">
      <div className="submit-container">
        <a href="/chat" className="submit-button" onClick={handleLogin}>
          Submit
        </a>
      </div>
      <div className="google-login-container">
        <a href="/google-login" className="google-login-button">
          <img src="/google icon.png" alt="Google Icon" />
        </a>
      </div>
    </div>
    </div>
    
       
        
      </div>
    </div>
  );
};

export default SignInPage;
