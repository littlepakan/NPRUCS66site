import React from 'react'

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar, Linkbeta } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Footer } from '../containers';
const Linksbeta = () => {
  return (
    <Fragment>
      <div className="Links">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="gradient_bg">
          {/* <Header /> */}
        </div>
        <Linkbeta />
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default Linksbeta