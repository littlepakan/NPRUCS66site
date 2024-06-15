// import React, { useEffect, useState } from 'react';
import './experiment.css';
import thclick from '../../assets/sounds/thclick.wav';
import { Link } from 'react-router-dom';

// import FormUsers from '../formuser/FormUsers';

// const [users, setUsers] = useState([]);

// useEffect(() => {
//   fetch("/api/users")
//   .then(res => res.json())
//   .then(data => setUsers(data));
// }, []);

const Button1 = () => {
  const handleClick = () => {
    new Audio(thclick).play()
  };
  return (
    <>
      <button className='clickTest' onClick={handleClick}>Click this</button>
    </>
  );
}
const Button2 = () => {
  const handleClick = () => {
    alert("เมื่อกี้คลิ๊กปุ่มใช่มะ~ ใช่แล้วล่ะมีแค่นี้แหละ -เมดิ");
  };
  return (
    <>
      <button className='clickTest' onClick={handleClick}>Click 2 this</button>
    </>
  );
}
const Button3 = () => {
  const handleClick = () => {
    new Audio(thclick).play()
  };
  return (
    <>
      
      <Link to='/' className="Linkstest" onClick={handleClick} >หน้าแรก</Link>

    </>
  );
}
const Button4 = () => {
  const handleClick = () => {
    alert("นี้คือ ตัวหนังสือกดได้นะ -เมดิ");
  };
  return (
    <>
      <a className='clickTest' onClick={handleClick}>Click 2 this</a>
    </>
  );
}

// --------------------------------------------
const Experiment = () => {

  return (
    <div className='NPRUCS66_experiment' id='experiment'>
      <div className='NPRUCS66_experiment-heading'>
        <h1 className='gradient_text text_center'>
          - ของทดลอง -
        </h1>
        <p className='NPRUCS66_experiment-description'>
          หน้านี้เอาไว้ทดลองผลลัพธ์ของคำสั่งต่างๆ จาก Source Code ซึ่งเป็นของที่อาจใส่เข้ามาในอนาคต (a.k.a. leaks)
        </p>
        {/* <FormUsers /> */}
      </div>
      <div className='NPRUCS66_experiment-container'>
        <div className='NPRUCS66_experiment-container_group'>
          <Button1 />
          <Button2 />
          <Button3 />
        </div>
        <div className='NPRUCS66_experiment-container_group'>
          <Button1 />
          <Button2 />
        </div>
        <div className='box'>
          <div className='NPRUCS66_experiment-container_groupv'>
            <Button3 />
            <Button3 />
          </div>
          <div className='NPRUCS66_experiment-container_groupv'>
            <Button3 />
            <Button4 />
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      {/* ------------------------------------------------ */}

    </div>
  )
}

export default Experiment