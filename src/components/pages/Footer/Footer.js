import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { TiCodeOutline, TiMail } from 'react-icons/ti';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <TiCodeOutline className='navbar-icon' />
              Sebastian Fritzsche
            </Link>
          </div>
          <small className='website-rights'>Sebastian Fritzsche © 2022</small>
          <div className='social-icons'>
          <a className='social-icon-link'
           href="https://www.instagram.com/sebastianfritzsche_/">
              <FaInstagram />
              </a>
              <a className='social-icon-link'
               href="https://www.linkedin.com/in/sebastian-fritzsche-1393281b1/">
              <FaLinkedin />
              </a>
              <a className='social-icon-link'
               href="mailto: sfritzsche148@gmail.com">
              <TiMail />
              </a>
              <a className='social-icon-link'
               href="https://github.com/sfritzsche148">
              <FaGithub />
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;