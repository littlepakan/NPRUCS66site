import React, { useState } from 'react';
import logo from '../../assets/images/logo66.png'
import './navbar.css';
import {
  RiCloseLine,
  RiMenu3Line 
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

//sfx
import click from '../../assets/sounds/click.wav';
import back from '../../assets/sounds/back.wav';

//BEM -> Block Element Modifier

const th_click = () => {
  new Audio(click).play()
};

const th_back = () => {
  new Audio(back).play()
};

function Menu () {

  return (
    <>
      <p>
        <Link to='/' onClick={th_click}>หน้าแรก</Link>
      </p>

      <p>
        <Link className='wip' to='/news' onClick={th_click}>ข่าวสาร</Link>
      </p>

      <p>
        <Link to='/links' onClick={th_click}>ลิงก์ </Link>
      </p>

      {/* <p>
        <Link to='/motivation' onClick={th_click}>แรงบันดาลใจ</Link>
      </p> */}

      <p>
        <Link to='/experiments' onClick={th_click}>ของทดลอง</Link>
      </p>

      <p>
        <Link to='/donation' onClick={th_click}>บริจาค</Link>
      </p>

      <p>
        <Link to='/contact' onClick={th_click}>ติดต่อ</Link>
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