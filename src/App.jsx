//Main File
import React from 'react';
//Import ไฟล์จากนอกไฟล์ตัวนี้มาเชื่อมเข้าด้วยกัน

//css
import './app.css';
import './fonts.css';

//components
import { Navbar } from './components';

//containers
import { Blog, Footer, Header } from './containers';

//router
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import { Contact, Donation, Home, Links, Motivation, News } from './pages';


//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';


const App = () => {
  //ใส่ Expression(เหล่าตัวแปร) ตรงนี้นะ~


  //สิ่งที่จะแสดงบนเว็บ
  return (
    //ในการส่งกลับนั้น เป็นการส่งแบบ HTML และจะมีเพียง Parent Element แค่ 1 แท็กเท่านั้น (a.k.a. root element)
    //ซึ่งจะเปิดด้วย <Fragment> </Fragment> หรือ <> </> เปล่าๆ ก็ได้
    <Fragment>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/links' element={<Links />}/>
          <Route path='/motivation' element={<Motivation />}/>
          <Route path='/donation' element={<Donation />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router> */}
      <div className="App">
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
};  

export default App;