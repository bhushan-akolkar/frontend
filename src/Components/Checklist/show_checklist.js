import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import MobileMenu from './MobileMenu';
import ReactMarkdown from 'react-markdown';
import remarkHtml from 'remark-html';
import remarkReact from 'remark-react';
import { useLocation } from 'react-router-dom';

import './show_checklist.css';

const ChatUI = () => {
  const chatContainerRef = useRef(null);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  
  const location = useLocation();
  // const { apiResponse } = location.state;
  const queryParams = new URLSearchParams(location.search);
  const apiResponseQueryParam = queryParams.get('apiResponse');
  const apiResponse = JSON.parse(decodeURIComponent(apiResponseQueryParam));

  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

 
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    window.location.href = '/login';
  };

  const toggleLogout = () => {
    setIsLogoutVisible(!isLogoutVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

 
  return (
    <div className={`chat-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button
        className={`hamburger-button ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
      >
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
      </button>

     
<div className="logo" >
  Banker Eaze
</div>
<h2 className="titlee">Finance Regulatory compliance assistant</h2>

      
      <div className={`sidebar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="sidebar-header">
          <div className="recent-chat-label">Recent Chat</div>
          <div className="divider-container">
            <hr className="divider-below-recent-chat" />
          </div>
          
        </div>
      </div>
      <div className="bottom-left-section">
  <p className="bottom-left-text">Product From</p>
  <img src="dataease-logo.png" alt="Product Image" className="bottom-left-image" />
</div>

      <div className="user-profile-container">
        <label className="mode-switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider">
            <span className="mode-label light-label">Light</span>
            <span className="mode-label dark-label">Dark</span>
          </span>
        </label>
        <button className="user-profile-button" type="button" onClick={toggleLogout}>
          <div className="user-profile-image">
            <img src={process.env.PUBLIC_URL + '/user-3-line.png'} alt="User Profile" />
          </div>
        </button>
        {isLogoutVisible && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

      <div className={`chat-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

        <div className="header-text">
          <div className="ask-question-text">Ask a question</div>
        </div>
        <hr className="divider" />
        <div className="chat-messages" ref={chatContainerRef}>
   
    <div className="api-response">
    {/* Display the API response here */}
    {apiResponse.map((responseItem, index) => (
      <div key={index} className="response-item">
        {responseItem}
      </div>
    ))}
  </div>

          <div ref={scrollToBottom}></div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;