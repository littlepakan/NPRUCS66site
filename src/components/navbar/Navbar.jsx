import React, { useState } from 'react';
import logo from '../../assets/images/logo66.png'
import './navbar.css';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

//BEM -> Block Element Modifier

// const Menu = () => (
//   <>
//     <p>
//       <a href="#home">หน้าแรก</a>
//     </p>
//     <p className='wip'>
//       <a href="#news">ข่าวสาร</a>
//     </p>
//     <p>
//       <a href="#links">ลิงก์</a>
//     </p>
//     <p>
//       <a href="#motivation">แรงบันดาลใจ</a>
//     </p>
//     <p>
//       <a href="#donation">บริจาค</a>
//     </p>
//     <p>
//       <a href="#contact">ติดต่อ</a>
//     </p>
//   </>
// )

function Menu () {
  return (
    <>
      <p>
        <Link to='/'>หน้าแรก</Link>
      </p>
      <p>
        <Link to='/news'>ข่าวสาร</Link>
      </p>
      <p>
        <Link to='/links'>ลิงก์</Link>
      </p>
      <p>
        <Link to='/motivation'>แรงบันดาลใจ</Link>
      </p>
      <p>
        <Link to='/donation'>บริจาค</Link>
      </p>
      <p>
        <Link to='/contact'>ติดต่อ</Link>
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
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className='NPRUCS66_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="NPRUCS66_navbar-sign">
        {/* <p>
              Sign in
        </p> */}
        <button type="button">
          เข้าสู่ระบบ
        </button>
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
                <button type="button">
                  เข้าสู่ระบบ
                </button>
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