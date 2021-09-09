import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub
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
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Kontakt</h2>
            <Link to='/'>E-Mail: sfritzsche148@gmail.com</Link>
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
          <Link
              className='social-icon-link'
              to={
                  '//github.com/sfritzscheTech'
              }
              target='_blank'
              aria-label='GitHub'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to={
                  '//www.instagram.com/s_fritzsche_/'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to= {
                  '//www.linkedin.com/in/sebastian-fritzsche-1393281b1/'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;