import React from 'react'

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Footer, Mentor } from '../containers';
const Mentors = () => {
  return (
    <Fragment>
      <div className="Contact">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="???">
          {/* <Header /> */}
        </div>
        <Mentor />
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default Mentors