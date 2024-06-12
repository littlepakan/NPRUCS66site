// import React, { useEffect, useState } from 'react';
import './Mentor.css';

// const [users, setUsers] = useState([]);

// useEffect(() => {
//   fetch("/api/users")
//   .then(res => res.json())
//   .then(data => setUsers(data));
// }, []);

// --------------------------------------------
const Links = () => {

  return (
    <div className='NPRUCS66_links' id='links'>
      <div className='NPRUCS66_links-heading'>
        <h1 className='gradient_text text_center'>
          - คำใบ้รหัสน้อง -
        </h1>
        <p className='NPRUCS66_links-description'>
          ที่นี้คือรายชื่อของรุ่น 67 และคำใบ้จากรุ่น 66 โดยจะเปิดเป็นเวลานะครับ จงหาพี่รหัสของตัวเองให้เจอนะ!
        </p>
        <p className='NPRUCS66_links-description'>
          อ๋อ... ยังไม่ได้ใช้ Database ดังนั้นโปรดรออย่างอดทนด้วยน้า! -เมดิ
        </p>
      </div>
      <table className="table">
        <thead>
          <tr className="head_detail">
            <th scope="col">รหัสนักศึกษา</th>
            <th scope="col">ชื่อ-สกุล</th>
            <th scope="col">คำใบ้ #1 (17/06)</th>
            <th scope="col">คำใบ้ #2 (??/??)</th>
            <th scope="col">คำใบ้ #3 (??/??)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="body_detail-odd">
            <td className='Number'>674245001</td>
            <td className='Name'>นายคฑาวุธ อ่อนดี</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245002</td>
            <td className='Name'>นายจักรินทร์ นาคนำพา</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245003</td>
            <td className='Name'>นายโชติวัฒน์ ไทรชมภู</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245004</td>
            <td className='Name'>นายธนดล ศิริคํา</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245005</td>
            <td className='Name'>นายนพคุณ ผุยรอด</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245006</td>
            <td className='Name'>นายชญานนท์ ม่วงเอี่ยม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245007</td>
            <td className='Name'>นางสาวยวิษฐา แสงระวี</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245008</td>
            <td className='Name'>นายวชิระ มนัสปัญญากุล</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245009</td>
            <td className='Name'>นายวัชรพงษ์ บัวบังใบ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245010</td>
            <td className='Name'>นายชนินทร์ พูลวงษ์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245011</td>
            <td className='Name'>นายชัยสิทธิ์ แก้วลอย</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245012</td>
            <td className='Name'>นายศรายุทธิ์ วิวาสุข</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245013</td>
            <td className='Name'>นายอภิวัฒน์ แสงณรงค์รัตน์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245014</td>
            <td className='Name'>นายณชพล คล้ายขำ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245015</td>
            <td className='Name'>นายธนกร จตุพรพิมล</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245016</td>
            <td className='Name'>นายธนพล ทองงาม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245017</td>
            <td className='Name'>นายธนวิชญ์ โตใจธรรม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245018</td>
            <td className='Name'>นายธนวินท์ โตใจธรรม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245019</td>
            <td className='Name'>นายนิติธร มีศรี</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245020</td>
            <td className='Name'>นายนิพน ศึกอร่าม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245021</td>
            <td className='Name'>นายปัณณวัฒน์ อินทร์ไพร</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245022</td>
            <td className='Name'>นายปิยวัฒน์ ชูรอต</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245023</td>
            <td className='Name'>นางสาวเพ็ชรลดา เกิดนุสนธ์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245024</td>
            <td className='Name'>นายพงศกร ศรีสวรรค์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245025</td>
            <td className='Name'>นายสามารถ ส้มฉุน</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245026</td>
            <td className='Name'>นางสาวพัชชา ไผ่ทอง</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245027</td>
            <td className='Name'>นายพิเชษฐ์ชัย เปียหลิ่ม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245028</td>
            <td className='Name'>นายภัทรเดช นันฝั้น</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245029</td>
            <td className='Name'>นายภาณุพงศ์ ทิพนัด</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245030</td>
            <td className='Name'>นายรพีภัทร์ ลานทอง</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245031</td>
            <td className='Name'>นายระพีพัฒน์ เกษใสย์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245032</td>
            <td className='Name'>นายวัชรพล อุ่นเรือน</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245033</td>
            <td className='Name'>นางสาววิมลรัตน์ สังขไพรวรรณ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245034</td>
            <td className='Name'>นายศิวกร หนูนาด</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245035</td>
            <td className='Name'>นายสิทธิชัย หอมทอง</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245036</td>
            <td className='Name'>นายสิทธิพงศ์ กลิ่นนิ่มนวล</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245037</td>
            <td className='Name'>นายสิรศิลป์ ทิมน้อย</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245038</td>
            <td className='Name'>นายสุรภัทร พ้นภ้ย</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245039</td>
            <td className='Name'>นายเสกสรรค์ ภู่ระหงษ์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245040</td>
            <td className='Name'>นางสาวอัญชิสา ปราณี</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245041</td>
            <td className='Name'>นายสิทธิรัตน์ มั่งน้อย</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245042</td>
            <td className='Name'>นายสุทธิเทพ อิทธิรักษ์ชัยกุล</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245043</td>
            <td className='Name'>นายสุนทรพจน์ ศรีสมบูรณ์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245044</td>
            <td className='Name'>นายอิศรา ทุ่มกลิ่น</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245045</td>
            <td className='Name'>นายพิชิตชัย ยิ้มถิ่น</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245046</td>
            <td className='Name'>นายชินพัฒน์ วงษ์สุวรรณ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245047</td>
            <td className='Name'>นายณธัช อดุลยธรรม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245048</td>
            <td className='Name'>นางสาวภาณุมาศ ตรีมาลา</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245049</td>
            <td className='Name'>นายกฤตนัย นุ่มแก้ว</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245050</td>
            <td className='Name'>นายณัฐภัทร พิศาลภัทรกิจ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245051</td>
            <td className='Name'>นางสาวธีราภรณ์ ศิลาหอม</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245052</td>
            <td className='Name'>นายปภังกร อุปถัมภ์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245053</td>
            <td className='Name'>นายธรรมะสิฐ คนรำ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245054</td>
            <td className='Name'>นายนครินทร์ เพ็ชรหยอย</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245055</td>
            <td className='Name'>นายภีระภัทร สุชัยคณารักษ์</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245056</td>
            <td className='Name'>นายรัฐภูมิ ถิ่นบางบุญ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245057</td>
            <td className='Name'>นายวรากร วชิรพันธ์วิชาญ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245058</td>
            <td className='Name'>นายธนกร สุกใส</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-odd">
            <td className='Number'>674245059</td>
            <td className='Name'>นายพิธิวัฒน์ มีขำ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          <tr className="body_detail-even">
            <td className='Number'>674245060</td>
            <td className='Name'>นายรัฐภูมิ จอดเกาะ</td>
            <td className='Hint1'>-</td>
            <td className='Hint2'>-</td>
            <td className='Hint3'>-</td>
          </tr>
          
        </tbody>
      </table>

    </div>
  )
}

export default Links