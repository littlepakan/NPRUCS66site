import React from 'react'

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Footer } from '../containers';
const Motivation = () => {
  return (
    <Fragment>
      <div className="Motivation">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="gradient_bg">
          {/* <Header /> */}
        </div>
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default Motivation