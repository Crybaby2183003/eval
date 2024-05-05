import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2>About Us</h2>
          <p>Enjoy the world of exclusive gadgets brought to you right at your Doorstep!</p>
        </div>
        <div className="footer-content">
          <h2>Contact Us</h2>
          <p>Email: harsimrat395.be22@chitkara.edu.in</p>
          <>Phone: +91 6280857297</>
        </div>
        <div className="footer-content">
          <h2>Follow Us <img src=""/></h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Carbon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
