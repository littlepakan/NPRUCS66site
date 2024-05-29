import React from 'react';
import './header.css';
import medicineidle from '../../assets/images/medicineidle.png'
import medicinehover from '../../assets/images/medicinehover.png'

const Header = () => {
  return (
    <div className='NPRUCS66_header' id='home'>
      <div className='NPRUCS66_header-content'>
        <h1 className='gradient_text'>
          ยินดีต้อนรับสู่เว็บไซต์
        </h1>
        <h1 className='gradient_text'>
          NPRU-CS 66
        </h1>
        <p>
          พัฒนาโดย ปกานต์ วงษ์ท่าเรือ
        </p>
      </div>
      <div className='NPRUCS66_header-image'>
        <img className='hover' src={medicinehover} alt='medicinehover' />
        <img className='idle' src={medicineidle} alt='medicineidle' />
      </div>
    </div>
  )
}

export default Header