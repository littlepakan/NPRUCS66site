import React from 'react'

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Blog, Footer, Header } from '../containers';
const Home = () => {
  return (
    <Fragment>
      <div className="Home">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="gradient_bg">
          <Header />
        </div>
        <Blog />
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default Home

// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home