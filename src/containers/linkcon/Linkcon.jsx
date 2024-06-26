import React from 'react';
import './linkcon.css';
import thclick from '../../assets/sounds/thclick.wav'
import therror from '../../assets/sounds/therror.wav'
import { Link } from 'react-router-dom';

const th_click = () => {
  new Audio(thclick).play();
};

const th_error = () => {
  new Audio(therror).play();
};



// const message = () => {
//   alert("นี้คือ ตัวหนังสือกดได้นะ -เมดิ");
// };

const ScheduleButton = () => {
  return (
    <>
      <Link to='/schedules' className='NPRUCS66_linkcon-button' onClick={th_click}>ตารางเรียน</Link>
    </>
  );
}

const NameButton = () => {
  return (
    <>
      <Link to='/stdlist' className='NPRUCS66_linkcon-button' onClick={th_click}>รายชื่อนักศึกษา</Link>
    </>
  );
}

// ไว้ใช้กดลิงก์สอบ เมื่อพร้อม
// const ExamButton = () => {
//   return (
//     <>
//       <Link to='/exams' className='NPRUCS66_linkcon-button' onClick={th_click}>ตารางสอบ</Link>
//     </>
//   );
// }

const MentorButton = () => {
  return (
    <>
      <Link to='/mentors' className='NPRUCS66_linkcon-button' onClick={th_click}>รายชื่อน้องรหัส</Link>
    </>
  );
}

///////////////////////////////////////////////////////////////////////

// const Button2 = () => {
//   return (
//     <p className='NPRUCS66_linkcon-button' onClick={th_click}>
//       Click 2 this
//     </p>
//   );
// }

const ExamWIPButton = () => {
  return (
    <p className='NPRUCS66_linkcon-buttonwip' onClick={th_error}>
      ตารางสอบ
    </p>
  );
}

const LeaveWIPButton = () => {
  return (
    <p className='NPRUCS66_linkcon-buttonwip' onClick={th_error}>
      ? ? ?
    </p>
  );
}


/////////////////////////////////////////////////////////////////////////

const Linkcon = () => {
  return (
    <div className='NPRUCS66_linkcon' id='linkcon'>
      <div className='NPRUCS66_linkcon-heading'>
        <h1 className='gradient_text text_center'>
          - ลิงก์ -
        </h1>
        <p className='NPRUCS66_linkcon-description'>
          อยากไปหน้าไหนล่ะ?... กดเข้าไปดูได้เลยนะ
        </p>
      </div>
      <div className='NPRUCS66_linkcon-container'>
        <div className='NPRUCS66_linkcon-container_group'>
          
          <div className='NPRUCS66_linkcon-container_group_inside'>
            <p className='NPRUCS66_linkcon-container_group_inside_head'>
              การเรียน
            </p>
          <ScheduleButton />

          <a className='NPRUCS66_linkcon-button' href="https://docs.google.com/spreadsheets/d/1KZjjdjPiYrJO527PIa-7PZq73aBRRI_qIq5URhX4kvQ/" traget="_blank">
            <p className=''>
              การบ้าน(GoogleSheet)
            </p>
          </a>

          <ExamWIPButton />
          </div>
          <div className='NPRUCS66_linkcon-container_group_inside'>
            <p className='NPRUCS66_linkcon-container_group_inside_head'>
              ข้อมูล/ยื่นเรื่อง
            </p>
          <NameButton />
          <MentorButton />
          <LeaveWIPButton />
          </div>
          <div className='NPRUCS66_linkcon-container_group_inside'>
            <p className='NPRUCS66_linkcon-container_group_inside_head'>
              ลิงก์ภายนอก
            </p>
          
          <a className='NPRUCS66_linkcon-button' href="https://reg.npru.ac.th/registrar/home.asp" traget="_blank">
            <p className=''>
              ระบบบริการ (reg)
            </p>
          </a>

          <a className='NPRUCS66_linkcon-button' href="http://alumni.npru.ac.th/activity/" traget="_blank">
            <p className=''>
              เช็คเวลากิจกรรม
            </p>
          </a>

          <a className='NPRUCS66_linkcon-button' href="https://ac.npru.ac.th/index.php?act=6a992d5529f459a44fee58c733255e86&lntype=editor_left&slm_id=2001" traget="_blank">
            <p className=''>
              ปฏิทินการศึกษา
            </p>
          </a>

          </div>

        </div>
        
        
        
      </div>
    </div>
  )
}

export default Linkcon