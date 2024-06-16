import React, { useState } from 'react';
import logo from '../../assets/images/logo66.png'
import './navbar.css';
import {
  RiCloseLine,
  RiMenu3Line 
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

//sfx
import thclick from '../../assets/sounds/thclick.wav';
import thback from '../../assets/sounds/thback.wav';
import therror from '../../assets/sounds/therror.wav';

//BEM -> Block Element Modifier

const th_click = () => {
  new Audio(thclick).play()
};

const th_back = () => {
  new Audio(thback).play()
};

const th_error = () => {
  new Audio(therror).play()
};

///////////////////////////////////////////////////////////

const NewsWIP = () => {
  return (
    <p className='navWIP' onClick={th_error}>ข่าวสาร</p>
  );
}

// const LinksWIP = () => {
//   return (
//     <a className='navWIP' onClick={th_error}>ลิงก์</a>
//   );
// }

const DonationWIP = () => {
  return (
    <p className='navWIP' onClick={th_error}>บริจาค</p>
  );
}

const ContactWIP = () => {
  return (
    <p className='navWIP' onClick={th_error}>ติดต่อ</p>
  );
}
///////////////////////////////////////////////////////////
function Menu () {
  return (
    <>
      <p>
        <Link to='/' onClick={th_click}>หน้าแรก</Link>
      </p>

      {/* <p>
        <Link to='/news' onClick={th_click}>ข่าวสาร</Link>
      </p> */}
      <p>
      <NewsWIP />
      </p>
      <p>
        <Link to='/links' onClick={th_click}>ลิงก์ </Link>
      </p>
      {/* <p>
      <LinksWIP />
      </p> */}
      {/* <p>
        <Link to='/motivation' onClick={th_click}>แรงบันดาลใจ</Link>
      </p> */}

      <p>
        <Link to='/experiments' onClick={th_click}>ทดลอง</Link>
      </p>

      {/* <p>
        <Link to='/donation' className='wip' onClick={th_click}>บริจาค</Link>
      </p> */}
      <p>
      <DonationWIP />
      </p>
      {/* <p>
        <Link to='/contact' className='wip' onClick={th_click}>ติดต่อ</Link>
      </p> */}
      <p>
      <ContactWIP />
      </p>
    </>
    
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='NPRUCS66_navbar'>
      <div className='NPRUCS66_navbar-links'>
        <div className='NPRUCS66_navbar-links_logo'>
          <Link to='/' onClick={th_back}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className='NPRUCS66_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="NPRUCS66_navbar-sign">
        {/* <p>
              Sign in
        </p> */}
        {/* <button type="button">
          เข้าสู่ระบบ                   |   //ปลดตรงนี้นะ เมดิ
        </button> */}
        {/* <button type="button">
          Sign up
        </button> */}
      </div>
      <div className='NPRUCS66_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#FFFFFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFFFFF" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='NPRUCS66_navbar-menu_container scale-up-center'>
            <div className='NPRUCS66-navbar-menu_container-links'>
              <Menu />
              <div className="NPRUCS66_navbar-menu_container-links-sign">
                {/* <p>
                  Sign in
                </p> */}
                {/* <button type="button">
                  เข้าสู่ระบบ                   |   //ปลดตรงนี้นะ เมดิ
                </button> */}
                {/* <button type="button">
                  Sign up
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar