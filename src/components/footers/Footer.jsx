import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sthita</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#ongoing" className="footer__link">Ongoing</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>   
          <a href="https://dribbble.com/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a> 
          <a href="https://github.com/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>   
          <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>                              
        </div>

        <span className="footer__copy">
          &#169; sthitapragyan. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer;
