import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { TiCodeOutline } from 'react-icons/ti';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a className='link' href="https://www.instagram.com/s_fritzsche_/">Instagram</a>
            <a className='link' href="https://www.linkedin.com/in/sebastian-fritzsche-1393281b1/">LinkedIn</a>
          </div>
          <div className='footer-link-items'>
            <h2>Kontakt</h2>
            <a className='link' href="mailto: sfritzsche148@gmail.com">E-Mail: sfritzsche148@gmail.com</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <TiCodeOutline className='navbar-icon' />
              Sebastian Fritzsche
            </Link>
          </div>
          <small className='website-rights'>Sebastian Fritzsche © 2021</small>
          <div className='social-icons'>
          <a className='social-icon-link'
           href="https://www.instagram.com/s_fritzsche_/">
              <FaInstagram />
              </a>
              <a className='social-icon-link'
               href="https://www.linkedin.com/in/sebastian-fritzsche-1393281b1/">
              <FaLinkedin />
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;