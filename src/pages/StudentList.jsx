import React from 'react'
import StudentListPic from '../assets/images/studentlist.png'

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Footer } from '../containers';
const StudentList = () => {
  return (
    <Fragment>
      <div className="Links">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="gradient_bg">
          {/* <Header /> */}
        </div>
          <img className="width100" src={StudentListPic} alt="StudentList" />
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default StudentList;