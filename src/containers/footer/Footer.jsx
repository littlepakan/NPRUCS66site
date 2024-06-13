import React from 'react';
// import logo from '../../assets/images/logo66.png'
import './footer.css';

const Footer = () => {
  return (
    <div className='NPRUCS66_footer'>
      <div className='NPRUCS66_footer-heading'>
        <h1 className='gradient_text'>
          NPRU-CS 66
        </h1>
        <h2 className='gradient_text'>
          version 0.6.1
        </h2>
      </div>
      <div className='NPRUCS66_footer-links'>
        {/* <div className='NPRUCS66_footer-links_logo'>
          <img src={logo} alt='logo' />
        </div> */}
          <div className='NPRUCS66_footer-links_div'>
            <h4>Links</h4>
            <p>WIP</p>
            <p>WIP</p>
            <p>WIP</p>
            <p>WIP</p>
          </div>
          <div className='NPRUCS66_footer-links_div'>
            <h4>Links</h4>
            <p>WIP</p>
            <p>WIP</p>
            <p>WIP</p>
            <p>WIP</p>
          </div>
      </div>
      {/* <div className='NPRUCS66_footer-copyright'>
        <p>CC-BY-SA NPRU-CS 66</p>
      </div> */}
    </div>
  )
}

export default Footer