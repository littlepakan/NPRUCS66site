// import React, { useEffect, useState } from 'react';
import './Mentor.css';

// const [users, setUsers] = useState([]);

// useEffect(() => {
//   fetch("/api/users")
//   .then(res => res.json())
//   .then(data => setUsers(data));
// }, []);

// --------------------------------------------
const Mentor = () => {

  return (
    <div className='NPRUCS66_mentor' id='mentor'>
      <div className='NPRUCS66_mentor-heading'>
        <h1 className='gradient_text text_center'>
          - คำใบ้รหัสน้อง -
        </h1>
        <p className='NPRUCS66_mentor-description'>
          ที่นี้คือรายชื่อของรุ่น 67 และคำใบ้จากรุ่น 66 โดยจะเปิดเป็นเวลา จงหาพี่รหัสของตัวเองให้เจอนะ!
        </p>
        <p className='NPRUCS66_mentor-description'>
          อ๋อ... ยังไม่ได้ใช้ Database ดังนั้นโปรดรออย่างอดทนด้วยน้า! -เมดิ
        </p><br />
        <p className='NPRUCS66_mentor-description'>
          tip : คุณสามารถกด Ctrl + F เพื่อค้นหาชื่อ หรือ รหัสนักศึกษาได้ในตอนนี้ 
        </p>
      </div>
      <table className="table_mentor">
        <thead>
          <tr className="head_detail">
            <th className="th_mentor" scope="col">รหัสนักศึกษา</th>
            <th className="th_mentor" scope="col">ชื่อ-สกุล</th>
            <th className="th_mentor" scope="col">คำใบ้ #1 (17/06)</th>
            <th className="th_mentor" scope="col">คำใบ้ #2 (21/06)</th>
            <th className="th_mentor" scope="col">คำใบ้ #3 (01/07)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245001</td>
            <td className='Name td_mentor'>นายคฑาวุธ อ่อนดี</td>
            <td className='Hint1 td_mentor'>ชื่อเล่นภาษาอังกฤษ</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นพยางเดียว</td>
            <td className='Hint3 td_mentor'>วาโลแรงค์ได</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245002</td>
            <td className='Name td_mentor'>นายจักรินทร์ นาคนำพา</td>
            <td className='Hint1 td_mentor'>1st</td>
            <td className='Hint2 td_mentor'>----.</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245003</td>
            <td className='Name td_mentor'>นายโชติวัฒน์ ไทรชมภู</td>
            <td className='Hint1 td_mentor'>เป็นหนึ่งในดอกไม้ที่มีพิษ</td>
            <td className='Hint2 td_mentor'>"ตะวันออก"</td>
            <td className='Hint3 td_mentor'>"พิษหวานตัวน้อย"</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245004</td>
            <td className='Name td_mentor'>นายธนดล ศิริคํา</td>
            <td className='Hint1 td_mentor'>(ลาออก)</td>
            <td className='Hint2 td_mentor'>(ลาออก)</td>
            <td className='Hint3 td_mentor'>(ลาออก)</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245005</td>
            <td className='Name td_mentor'>นายนพคุณ ผุยรอด</td>
            <td className='Hint1 td_mentor'>กระต่ายขี้เหงา</td>
            <td className='Hint2 td_mentor'>พวกเราเคยเจอกันแล้ว</td>
            <td className='Hint3 td_mentor'>ชื่อเล่นขึ้นต้นด้วย 'G'</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245006</td>
            <td className='Name td_mentor'>นายชญานนท์ ม่วงเอี่ยม</td>
            <td className='Hint1 td_mentor'>ไม่ผูกเชือกรองเท้า</td>
            <td className='Hint2 td_mentor'>ชื่อ Discord ตัวแรกคือ "s"</td>
            <td className='Hint3 td_mentor'>ชื่อเล่นขึ้นต้นด้วยตัว "P"</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245007</td>
            <td className='Name td_mentor'>นางสาวยวิษฐา แสงระวี</td>
            <td className='Hint1 td_mentor'>อาหมวย</td>
            <td className='Hint2 td_mentor'>Miracle</td>
            <td className='Hint3 td_mentor'>หนึ่งในที่ไปรับน้องและปรับพื้นฐาน</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245008</td>
            <td className='Name td_mentor'>นายวชิระ มนัสปัญญากุล</td>
            <td className='Hint1 td_mentor'>ชอบเล่นฟุตบอล</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นขึ้นต้นด้วย ตัว B</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245009</td>
            <td className='Name td_mentor'>นายวัชรพงษ์ บัวบังใบ</td>
            <td className='Hint1 td_mentor'>JM</td>
            <td className='Hint2 td_mentor'>MJ</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245010</td>
            <td className='Name td_mentor'>นายชนินทร์ พูลวงษ์</td>
            <td className='Hint1 td_mentor'>Mangngongngang</td>
            <td className='Hint2 td_mentor'>Cantaloupe ( Discord )</td>
            <td className='Hint3 td_mentor'>Nohara Shinnosuke</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245011</td>
            <td className='Name td_mentor'>นายชัยสิทธิ์ แก้วลอย</td>
            <td className='Hint1 td_mentor'>772392</td>
            <td className='Hint2 td_mentor'>161815231</td>
            <td className='Hint3 td_mentor'>red bull</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245012</td>
            <td className='Name td_mentor'>นายศรายุทธิ์ วิวาสุข</td>
            <td className='Hint1 td_mentor'>TFM-reverse</td>
            <td className='Hint2 td_mentor'>7-21-14 เกี่ยวข้องกับคำใบ้ 1</td>
            <td className='Hint3 td_mentor'>ชื่อเล่นคือสิ่งที่อันตราย ชื่อมีตัวu</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245013</td>
            <td className='Name td_mentor'>นายอภิวัฒน์ แสงณรงค์รัตน์</td>
            <td className='Hint1 td_mentor'>….-..---</td>
            <td className='Hint2 td_mentor'>สีเขียวโตจากดิน</td>
            <td className='Hint3 td_mentor'>สะพายกระเป๋าสีเขียว</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245014</td>
            <td className='Name td_mentor'>นายณชพล คล้ายขำ</td>
            <td className='Hint1 td_mentor'>เพลงมันมาก</td>
            <td className='Hint2 td_mentor'>เรียกรุ่นน้องพี่ก็หัน</td>
            <td className='Hint3 td_mentor'>สะแด่วแห้ว</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245015</td>
            <td className='Name td_mentor'>นายธนกร จตุพรพิมล</td>
            <td className='Hint1 td_mentor'>มีบริวารเป็นดวงจันทร์</td>
            <td className='Hint2 td_mentor'>TNW K</td>
            <td className='Hint3 td_mentor'>vans</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245016</td>
            <td className='Name td_mentor'>นายธนพล ทองงาม</td>
            <td className='Hint1 td_mentor'>สามศาลา</td>
            <td className='Hint2 td_mentor'>9na</td>
            <td className='Hint3 td_mentor'>ขึ้นต้นด้วย ศ</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245017</td>
            <td className='Name td_mentor'>นายธนวิชญ์ โตใจธรรม</td>
            <td className='Hint1 td_mentor'>ทำงานในคอมเสร็จต้อง</td>
            <td className='Hint2 td_mentor'>รองเท้าสีขาว</td>
            <td className='Hint3 td_mentor'>ชื่อเล่นเกี่ยวกับการประหยัด</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245018</td>
            <td className='Name td_mentor'>นายธนวินท์ โตใจธรรม</td>
            <td className='Hint1 td_mentor'>เป็นญาติกับผึ้ง</td>
            <td className='Hint2 td_mentor'>เป็นแมลงมีปีกชนิดนึง</td>
            <td className='Hint3 td_mentor'>ชื่อขึ้นต้นด้วย ต ig : tp???</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245019</td>
            <td className='Name td_mentor'>นายนิติธร มีศรี</td>
            <td className='Hint1 td_mentor'>ชื่อเล่นพี่ภาษาอังกฤษ3ตัว🤓</td>
            <td className='Hint2 td_mentor'>P….N🧐</td>
            <td className='Hint3 td_mentor'>ใช้ชื่อจริงภาษาอังกฤษทุกแอพ📱</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245020</td>
            <td className='Name td_mentor'>นายนิพน ศึกอร่าม</td>
            <td className='Hint1 td_mentor'>ชื่อผู้ก่อตั้งFacebook</td>
            <td className='Hint2 td_mentor'>Kram</td>
            <td className='Hint3 td_mentor'>จ้ำหม้ำ</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245021</td>
            <td className='Name td_mentor'>นายปัณณวัฒน์ อินทร์ไพร</td>
            <td className='Hint1 td_mentor'>อีสาน Bro</td>
            <td className='Hint2 td_mentor'>เป็นผู้ชายแต่ชื่อเหมือนผู้หญิง</td>
            <td className='Hint3 td_mentor'>วัยรุ่นไฟล์ M</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245022</td>
            <td className='Name td_mentor'>นายปิยวัฒน์ ชูรอต</td>
            <td className='Hint1 td_mentor'>ขนมปัง</td>
            <td className='Hint2 td_mentor'>Pung :P</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245023</td>
            <td className='Name td_mentor'>นางสาวเพ็ชรลดา เกิดนุสนธ์</td>
            <td className='Hint1 td_mentor'>39</td>
            <td className='Hint2 td_mentor'>Spider man </td>
            <td className='Hint3 td_mentor'>เด็กน้อย</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245024</td>
            <td className='Name td_mentor'>นายพงศกร ศรีสวรรค์</td>
            <td className='Hint1 td_mentor'>….-..---</td>
            <td className='Hint2 td_mentor'>สีเขียวโตจากดิน</td>
            <td className='Hint3 td_mentor'>กระเป๋าสีเขียว</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245025</td>
            <td className='Name td_mentor'>นายสามารถ ส้มฉุน</td>
            <td className='Hint1 td_mentor'>ชื่อผลไม้</td>
            <td className='Hint2 td_mentor'>ชอบใส่เสื้อคลุมสีดำ-ขาว</td>
            <td className='Hint3 td_mentor'>เคสโทรศัพท์ก็สีดำ</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor'>674245026</td>
            <td className='Name td_mentor'>นางสาวพัชชา ไผ่ทอง</td>
            <td className='Hint1 td_mentor'>Ring</td>
            <td className='Hint2 td_mentor'>เสื้อนักศึกษาแขนสั้น</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245027</td>
            <td className='Name td_mentor'>นายพิเชษฐ์ชัย เปียหลิ่ม</td>
            <td className='Hint1 td_mentor'>ขึ้นต้นด้วย2ลงท้ายด้วย4คิคิ;)</td>
            <td className='Hint2 td_mentor'>เรียนสาขาเดียวกัน</td>
            <td className='Hint3 td_mentor'>เศร้าเก่งที่สุด</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245028</td>
            <td className='Name td_mentor'>นายภัทรเดช นันฝั้น</td>
            <td className='Hint1 td_mentor'>เป็นญาติกับผึ้ง</td>
            <td className='Hint2 td_mentor'>เป็นแมลงชนิดนึง</td>
            <td className='Hint3 td_mentor'>ชื่อขึ้นต้นด้วย ต ig : tp???</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245029</td>
            <td className='Name td_mentor'>นายภาณุพงศ์ ทิพนัด</td>
            <td className='Hint1 td_mentor'>ตัวเตี้ยๆ</td>
            <td className='Hint2 td_mentor'>หลังฟ้าถือกล้อง IG/Discord</td>
            <td className='Hint3 td_mentor'>แสกกลางยังโดนเท</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245030</td>
            <td className='Name td_mentor'>นายรพีภัทร์ ลานทอง</td>
            <td className='Hint1 td_mentor'>เสื้อแขนสั้น</td>
            <td className='Hint2 td_mentor'>กระเป๋าเคียง</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245031</td>
            <td className='Name td_mentor'>นายระพีพัฒน์ เกษใสย์</td>
            <td className='Hint1 td_mentor'>เพลงมันมาก</td>
            <td className='Hint2 td_mentor'>เรียกรุ่นน้องพี่ก็หัน</td>
            <td className='Hint3 td_mentor'>สะแด่วแห้ว</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245032</td>
            <td className='Name td_mentor'>นายวัชรพล อุ่นเรือน</td>
            <td className='Hint1 td_mentor'>ชอบใส่เสื้อกันหนาวสีดำ</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นมีความหมายว่าเก่ง</td>
            <td className='Hint3 td_mentor'>ชอบเล่นวาโล</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245033</td>
            <td className='Name td_mentor'>นางสาววิมลรัตน์ สังขไพรวรรณ</td>
            <td className='Hint1 td_mentor'>(ลาออก)</td>
            <td className='Hint2 td_mentor'>(ลาออก)</td>
            <td className='Hint3 td_mentor'>(ลาออก)</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245034</td>
            <td className='Name td_mentor'>นายศิวกร หนูนาด</td>
            <td className='Hint1 td_mentor'>อาหมวย</td>
            <td className='Hint2 td_mentor'>Miracle</td>
            <td className='Hint3 td_mentor'>หนึ่งในที่ไปรับน้องและปรับพื้นฐาน</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245035</td>
            <td className='Name td_mentor'>นายสิทธิชัย หอมทอง</td>
            <td className='Hint1 td_mentor'>ชีวิตติดแกรม ชอบNike</td>
            <td className='Hint2 td_mentor'>แมงมุม</td>
            <td className='Hint3 td_mentor'>แงว</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245036</td>
            <td className='Name td_mentor'>นายสิทธิพงศ์ กลิ่นนิ่มนวล</td>
            <td className='Hint1 td_mentor'>ชื่อเล่นพี่ภาษาอังกฤษ3ตัว🤓</td>
            <td className='Hint2 td_mentor'>P….N🧐</td>
            <td className='Hint3 td_mentor'>ใช้ชื่อจริงภาษาอังกฤษทุกแอพ📱</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245037</td>
            <td className='Name td_mentor'>นายสิรศิลป์ ทิมน้อย</td>
            <td className='Hint1 td_mentor'>วาโลแรงค์ได</td>
            <td className='Hint2 td_mentor'>ชื่อเป็นราศี</td>
            <td className='Hint3 td_mentor'>เป็น ผญ สูง 157 </td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245038</td>
            <td className='Name td_mentor'>นายสุรภัทร พ้นภ้ย</td>
            <td className='Hint1 td_mentor'>แต่งตัวสบาย</td>
            <td className='Hint2 td_mentor'>รองเท้าแตะ</td>
            <td className='Hint3 td_mentor'>สร้อยปะคำ</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245039</td>
            <td className='Name td_mentor'>นายเสกสรรค์ ภู่ระหงษ์</td>
            <td className='Hint1 td_mentor'>วาโลแรงค์ได</td>
            <td className='Hint2 td_mentor'>ชื่อเป็นราศี</td>
            <td className='Hint3 td_mentor'>เป็น ผญ สูง 157 </td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245040</td>
            <td className='Name td_mentor'>นางสาวอัญชิสา ปราณี</td>
            <td className='Hint1 td_mentor'>สูง175 กว่าๆ😎</td>
            <td className='Hint2 td_mentor'>ติดหูฟังมาก</td>
            <td className='Hint3 td_mentor'>ผู้ชาย</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245041</td>
            <td className='Name td_mentor'>นายสิทธิรัตน์ มั่งน้อย</td>
            <td className='Hint1 td_mentor'>ชื่อจริงขึ้นต้นด้วย ณ</td>
            <td className='Hint2 td_mentor'>นามสกุลขึ้นต้นด้วย ป</td>
            <td className='Hint3 td_mentor'>ผู้ชาย</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245042</td>
            <td className='Name td_mentor'>นายสุทธิเทพ อิทธิรักษ์ชัยกุล</td>
            <td className='Hint1 td_mentor'>(ลาออก)</td>
            <td className='Hint2 td_mentor'>(ลาออก)</td>
            <td className='Hint3 td_mentor'>(ลาออก)</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245043</td>
            <td className='Name td_mentor'>นายสุนทรพจน์ ศรีสมบูรณ์</td>
            <td className='Hint1 td_mentor'>ง่ายๆ 29</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นไม่เหมือนใคร</td>
            <td className='Hint3 td_mentor'>M***</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245044</td>
            <td className='Name td_mentor'>นายอิศรา ทุ่มกลิ่น</td>
            <td className='Hint1 td_mentor'>เพื่อนอาหมวย</td>
            <td className='Hint2 td_mentor'>ใส่Nike air force1 , adidas superstar</td>
            <td className='Hint3 td_mentor'>หวานหว่านหว้านหว๊านหว๋าน</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245045</td>
            <td className='Name td_mentor'>นายพิชิตชัย ยิ้มถิ่น</td>
            <td className='Hint1 td_mentor'>772392</td>
            <td className='Hint2 td_mentor'>161815231</td>
            <td className='Hint3 td_mentor'>red bull</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245046</td>
            <td className='Name td_mentor'>นายชินพัฒน์ วงษ์สุวรรณ</td>
            <td className='Hint1 td_mentor'>(ลาออก)</td>
            <td className='Hint2 td_mentor'>(ลาออก)</td>
            <td className='Hint3 td_mentor'>(ลาออก)</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245047</td>
            <td className='Name td_mentor'>นายณธัช อดุลยธรรม</td>
            <td className='Hint1 td_mentor'>Ring</td>
            <td className='Hint2 td_mentor'>เสื้อนักศึกษาแขนสั้น</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245048</td>
            <td className='Name td_mentor'>นางสาวภาณุมาศ ตรีมาลา</td>
            <td className='Hint1 td_mentor'>Mangngongngang</td>
            <td className='Hint2 td_mentor'>Cantaloupe ( Discord )</td>
            <td className='Hint3 td_mentor'>Nohara Shinnosuke</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245049</td>
            <td className='Name td_mentor'>นายกฤตนัย นุ่มแก้ว</td>
            <td className='Hint1 td_mentor'>เกี่ยวกับช่วงเวลา</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นขึ้นต้นตัว P ลงท้ายตัว M</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245050</td>
            <td className='Name td_mentor'>นายณัฐภัทร พิศาลภัทรกิจ</td>
            <td className='Hint1 td_mentor'>รองเท้าไม่ค่อยเหมือนใคร</td>
            <td className='Hint2 td_mentor'>กระเป๋าลายลิง</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245051</td>
            <td className='Name td_mentor'>นางสาวธีราภรณ์ ศิลาหอม</td>
            <td className='Hint1 td_mentor'>ชอบกินกระเพราหมูกรอบ</td>
            <td className='Hint2 td_mentor'>ผมหยักศก</td>
            <td className='Hint3 td_mentor'>ชื่อเล่นขึ้นต้นด้วย`p`</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245052</td>
            <td className='Name td_mentor'>นายปภังกร อุปถัมภ์</td>
            <td className='Hint1 td_mentor'>ใส่นาฬิกา</td>
            <td className='Hint2 td_mentor'>ใส่รองเท้า nike</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245053</td>
            <td className='Name td_mentor'>นายธรรมะสิฐ คนรำ</td>
            <td className='Hint1 td_mentor'>ขึ้นต้นด้วย2ลงท้ายด้วย4คิคิ;)</td>
            <td className='Hint2 td_mentor'>เรียนสาขาเดียวกัน</td>
            <td className='Hint3 td_mentor'>เศร้าเก่งที่สุด</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245054</td>
            <td className='Name td_mentor'>นายนครินทร์ เพ็ชรหยอย</td>
            <td className='Hint1 td_mentor'>JJ ที่ไม่ได้มาจาก JoJo แต่เป็นตัวย่อชื่อจริง</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นขึ้นต้นด้วยตัว P นามสกุลลงท้ายด้วย "ล"</td>
            <td className='Hint3 td_mentor'>ในวันปรับพื้นฐานอ่ะ สักคน</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245055</td>
            <td className='Name td_mentor'>นายภีระภัทร สุชัยคณารักษ์</td>
            <td className='Hint1 td_mentor'>เหมือนหลับตลอดเวลา</td>
            <td className='Hint2 td_mentor'>ชุดชาวเกาะ</td>
            <td className='Hint3 td_mentor'>ชื่อเล่นขึ้นต้น'Y'</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245056</td>
            <td className='Name td_mentor'>นายรัฐภูมิ ถิ่นบางบุญ</td>
            <td className='Hint1 td_mentor'>สูง 170 ซม.</td>
            <td className='Hint2 td_mentor'>ชื่อเล่นขึ้นต้นด้วยตัว B</td>
            <td className='Hint3 td_mentor'>รหัสประจำตัว ตัวท้ายสุด คือ 9</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245057</td>
            <td className='Name td_mentor'>นายวรากร วชิรพันธ์วิชาญ</td>
            <td className='Hint1 td_mentor'>เป็นหนึ่งในดอกไม้ที่มีพิษ</td>
            <td className='Hint2 td_mentor'>"ตะวันออก"</td>
            <td className='Hint3 td_mentor'>"พิษหวานตัวน้อย"</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245058</td>
            <td className='Name td_mentor'>นายธนกร สุกใส</td>
            <td className='Hint1 td_mentor'>มีบริวารเป็นดวงจันทร์</td>
            <td className='Hint2 td_mentor'>TNW K</td>
            <td className='Hint3 td_mentor'>vans</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245059</td>
            <td className='Name td_mentor'>นายพิธิวัฒน์ มีขำ</td>
            <td className='Hint1 td_mentor'>(ลาออก)</td>
            <td className='Hint2 td_mentor'>(ลาออก)</td>
            <td className='Hint3 td_mentor'>(ลาออก)</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245060</td>
            <td className='Name td_mentor'>นายรัฐภูมิ จอดเกาะ</td>
            <td className='Hint1 td_mentor'>"สุรบถ ?????"</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245061</td>
            <td className='Name td_mentor'>นางสาวธนาภา อาจหาญ</td>
            <td className='Hint1 td_mentor'>สามศาลา</td>
            <td className='Hint2 td_mentor'>9na</td>
            <td className='Hint3 td_mentor'>ขึ้นต้นด้วย ศ</td>
          </tr>
          
        </tbody>
      </table>
    <br />
    </div>
  )
}

export default Mentor