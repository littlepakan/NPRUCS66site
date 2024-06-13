// import React, { useEffect, useState } from 'react';
import './experiment.css';
import click from '../../assets/sounds/click.wav';

// const [users, setUsers] = useState([]);

// useEffect(() => {
//   fetch("/api/users")
//   .then(res => res.json())
//   .then(data => setUsers(data));
// }, []);

const Button1 = () => {
  const handleClick = () => {
    new Audio(click).play()
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

// --------------------------------------------
const Links = () => {

  return (
    <div className='NPRUCS66_links' id='links'>
      <div className='NPRUCS66_links-heading'>
        <h1 className='gradient_text text_center'>
          ~ คำใบ้รหัสน้อง ~
        </h1>
        <p className='NPRUCS66_links-description'>
          ที่นี้คือรายชื่อของรุ่น 67 และคำใบ้จากรุ่น 66 โดยจะเปิดเป็นเวลานะครับ จงหาพี่รหัสของตัวเองให้เจอนะครับ!
        </p>
      </div>
      {/* ------------------------------------------------ */}

    </div>
  )
}

export default Links