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
            <th className="th_mentor" scope="col">คำใบ้ #2 (??/??)</th>
            <th className="th_mentor" scope="col">คำใบ้ #3 (??/??)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245001</td>
            <td className='Name td_mentor'>นายคฑาวุธ อ่อนดี</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245002</td>
            <td className='Name td_mentor'>นายจักรินทร์ นาคนำพา</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245003</td>
            <td className='Name td_mentor'>นายโชติวัฒน์ ไทรชมภู</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245004</td>
            <td className='Name td_mentor'>นายธนดล ศิริคํา</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245005</td>
            <td className='Name td_mentor'>นายนพคุณ ผุยรอด</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245006</td>
            <td className='Name td_mentor'>นายชญานนท์ ม่วงเอี่ยม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245007</td>
            <td className='Name td_mentor'>นางสาวยวิษฐา แสงระวี</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245008</td>
            <td className='Name td_mentor'>นายวชิระ มนัสปัญญากุล</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245009</td>
            <td className='Name td_mentor'>นายวัชรพงษ์ บัวบังใบ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245010</td>
            <td className='Name td_mentor'>นายชนินทร์ พูลวงษ์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245011</td>
            <td className='Name td_mentor'>นายชัยสิทธิ์ แก้วลอย</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245012</td>
            <td className='Name td_mentor'>นายศรายุทธิ์ วิวาสุข</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245013</td>
            <td className='Name td_mentor'>นายอภิวัฒน์ แสงณรงค์รัตน์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245014</td>
            <td className='Name td_mentor'>นายณชพล คล้ายขำ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245015</td>
            <td className='Name td_mentor'>นายธนกร จตุพรพิมล</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245016</td>
            <td className='Name td_mentor'>นายธนพล ทองงาม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245017</td>
            <td className='Name td_mentor'>นายธนวิชญ์ โตใจธรรม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245018</td>
            <td className='Name td_mentor'>นายธนวินท์ โตใจธรรม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245019</td>
            <td className='Name td_mentor'>นายนิติธร มีศรี</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245020</td>
            <td className='Name td_mentor'>นายนิพน ศึกอร่าม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245021</td>
            <td className='Name td_mentor'>นายปัณณวัฒน์ อินทร์ไพร</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245022</td>
            <td className='Name td_mentor'>นายปิยวัฒน์ ชูรอต</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245023</td>
            <td className='Name td_mentor'>นางสาวเพ็ชรลดา เกิดนุสนธ์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245024</td>
            <td className='Name td_mentor'>นายพงศกร ศรีสวรรค์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245025</td>
            <td className='Name td_mentor'>นายสามารถ ส้มฉุน</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245026</td>
            <td className='Name'>นางสาวพัชชา ไผ่ทอง</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245027</td>
            <td className='Name td_mentor'>นายพิเชษฐ์ชัย เปียหลิ่ม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245028</td>
            <td className='Name td_mentor'>นายภัทรเดช นันฝั้น</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245029</td>
            <td className='Name td_mentor'>นายภาณุพงศ์ ทิพนัด</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245030</td>
            <td className='Name td_mentor'>นายรพีภัทร์ ลานทอง</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245031</td>
            <td className='Name td_mentor'>นายระพีพัฒน์ เกษใสย์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245032</td>
            <td className='Name td_mentor'>นายวัชรพล อุ่นเรือน</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245033</td>
            <td className='Name td_mentor'>นางสาววิมลรัตน์ สังขไพรวรรณ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245034</td>
            <td className='Name td_mentor'>นายศิวกร หนูนาด</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245035</td>
            <td className='Name td_mentor'>นายสิทธิชัย หอมทอง</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245036</td>
            <td className='Name td_mentor'>นายสิทธิพงศ์ กลิ่นนิ่มนวล</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245037</td>
            <td className='Name td_mentor'>นายสิรศิลป์ ทิมน้อย</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245038</td>
            <td className='Name td_mentor'>นายสุรภัทร พ้นภ้ย</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245039</td>
            <td className='Name td_mentor'>นายเสกสรรค์ ภู่ระหงษ์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245040</td>
            <td className='Name td_mentor'>นางสาวอัญชิสา ปราณี</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245041</td>
            <td className='Name td_mentor'>นายสิทธิรัตน์ มั่งน้อย</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245042</td>
            <td className='Name td_mentor'>นายสุทธิเทพ อิทธิรักษ์ชัยกุล</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245043</td>
            <td className='Name td_mentor'>นายสุนทรพจน์ ศรีสมบูรณ์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245044</td>
            <td className='Name td_mentor'>นายอิศรา ทุ่มกลิ่น</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245045</td>
            <td className='Name td_mentor'>นายพิชิตชัย ยิ้มถิ่น</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245046</td>
            <td className='Name td_mentor'>นายชินพัฒน์ วงษ์สุวรรณ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245047</td>
            <td className='Name td_mentor'>นายณธัช อดุลยธรรม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245048</td>
            <td className='Name td_mentor'>นางสาวภาณุมาศ ตรีมาลา</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245049</td>
            <td className='Name td_mentor'>นายกฤตนัย นุ่มแก้ว</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245050</td>
            <td className='Name td_mentor'>นายณัฐภัทร พิศาลภัทรกิจ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245051</td>
            <td className='Name td_mentor'>นางสาวธีราภรณ์ ศิลาหอม</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245052</td>
            <td className='Name td_mentor'>นายปภังกร อุปถัมภ์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245053</td>
            <td className='Name td_mentor'>นายธรรมะสิฐ คนรำ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245054</td>
            <td className='Name td_mentor'>นายนครินทร์ เพ็ชรหยอย</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245055</td>
            <td className='Name td_mentor'>นายภีระภัทร สุชัยคณารักษ์</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245056</td>
            <td className='Name td_mentor'>นายรัฐภูมิ ถิ่นบางบุญ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245057</td>
            <td className='Name td_mentor'>นายวรากร วชิรพันธ์วิชาญ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245058</td>
            <td className='Name td_mentor'>นายธนกร สุกใส</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number td_mentor '>674245059</td>
            <td className='Name td_mentor'>นายพิธิวัฒน์ มีขำ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number td_mentor '>674245060</td>
            <td className='Name td_mentor'>นายรัฐภูมิ จอดเกาะ</td>
            <td className='Hint1 td_mentor'>-</td>
            <td className='Hint2 td_mentor'>-</td>
            <td className='Hint3 td_mentor'>-</td>
          </tr>
          
        </tbody>
      </table>

    </div>
  )
}

export default Mentor