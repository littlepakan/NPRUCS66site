// import React, { useEffect, useState } from 'react';
import './experiment.css';
import click from '../../assets/sounds/click.wav';

import FormUsers from '../formuser/FormUsers';

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
const Experiment = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("/api/users")
  //   .then(res => res.json())
  //   .then(data => setUsers(data));
  // }, []);

  // function renderUsers() {
  //   return users.map((user, i) =>{
  //     return <div key={i}>
  //       <h3>ID: {user.id}</h3>
  //       <p>Name: {user.name}</p>
  //     </div>
  //   })
  // }

  return (
    <div className='NPRUCS66_experiment' id='experiment'>
      <div className='NPRUCS66_experiment-heading'>
        <h1 className='gradient_text text_center'>
          - ของทดลอง -
        </h1>
        <p className='NPRUCS66_experiment-description'>
          หน้านี้เอาไว้ทดลองผลลัพธ์ของคำสั่งต่างๆ จาก Source Code ซึ่งเป็นของที่อาจใส่เข้ามาในอนาคต (a.k.a. leaks)
        </p>
        <FormUsers />
      </div>
      <div className='NPRUCS66_experiment-container'>
        <div className='NPRUCS66_experiment-container_group'>
          <Button1 />
          <Button2 />
        </div>
        <div className='NPRUCS66_experiment-container_group'>
          <Button1 />
          <Button2 />
        </div>
      </div>
      {/* ------------------------------------------------ */}

    </div>
  )
}

export default Experiment