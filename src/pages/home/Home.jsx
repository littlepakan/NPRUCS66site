import React from 'react'

//css
import './home.css';
import '../../fonts.css';

//components
import { Navbar } from '../../components';

//containers
import { Blog, Footer, Header } from '../../containers';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';
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