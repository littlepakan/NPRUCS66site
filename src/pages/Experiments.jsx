import React from 'react'

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Experiment, Footer } from '../containers';
const Experiments = () => {
  return (
    <Fragment>
      <div className="Experiments">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="gradient_bg">
          {/* <Header /> */}
        </div>
        <Experiment />
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default Experiments