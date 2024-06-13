import React from 'react'
import './schedule.css'
const Schedule = () => {
  return (
    <div className='NPRUCS66_schedule'>
      <h1 className='gradient_text text_center'>
          - ตารางเรียน -
          <br /><br />
      </h1>
      <div className='NPRUCS66_schedule-heading'>
      <h2 className='s43'>หมู่เรียน 66/43</h2>
        <div className='NPRUCS66_schedule_box'>
          <p className='NPRUCS66_schedule-description1'>
          ===============================================<br />
          2000202 สีสันแห่งชีวิต<br />
          อาจารย์หลายท่าน (8 ท่าน)<br />
          -----------------------------------------------<br />
          7142101	สถิติสำหรับนักวิทยาศาสตร์<br />
          ผศ. ดร. ณัฐพัชญ์ ศรีราจันทร์<br />
          -----------------------------------------------<br />
          7142401	การเขียนโปรแกรมเชิงวัตถุ<br />
          ผศ. นันทิยา หลิมศิโรรัตน์<br />
          -----------------------------------------------<br />
          1500102	ทักษะการฟังและการพูดภาษาอังกฤษ<br />
          อาจารย์ ปฐมารัตน์ ภูมิพัฒน์ปรียา<br />
          -----------------------------------------------<br />
          1500201	ภาษาอังกฤษเพื่อการสื่อสารข้ามวัฒนธรรม<br />
          อาจารย์ Jemar Largo Dela Cruz<br />
          -----------------------------------------------<br />
          7142104	คณิตศาสตร์ดีสครีต<br />
          ผศ.ดร. ภรัณยา ปาลวิสุทธิ์<br />
          -----------------------------------------------<br />
          </p>
          <br />
          <p className='NPRUCS66_schedule-description2'>
          ===============================================<br />
          เวลา 13:30 - 16:30 น. | วันพุธ<br />
          ห้อง ป.A3<br />
          -----------------------------------------------<br />
          เวลา 13:30 - 16:30 น. | วันพฤหัสบดี<br />
          ห้อง C503<br />
          -----------------------------------------------<br />
          เวลา 08:30 - 12:30 น. | วันพฤหัสบดี<br />
          ห้อง C210<br />
          -----------------------------------------------<br />
          เวลา 08:30 - 11:30 น. | วันศุกร์<br />
          ห้อง A3-331<br />
          -----------------------------------------------<br />
          เวลา 15:30-18:30 น. | วันจันทร์<br />
          ห้อง 15/13/2<br />
          -----------------------------------------------<br />
          เวลา 12:30-15:30 น. | วันอังคาร<br />
          ห้อง C506<br />
          -----------------------------------------------<br />
          </p>
        <br />
        </div>
      </div>
      <div>
      <table className="table_schedule id='s43'">
        <thead>
          <tr className="head_detail">
            <th className="head_spaceday" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="body_detail-monday">
            <td colSpan="1" className='monday td_schedule'>วันจันทร์</td>
            <td colSpan="15" className='Space td_schedule'></td>
            <td colSpan="6" className='monday td_schedule'>
              1500201 | 15/13/2<br />
              15:30 - 18:30
            </td>
            <td colSpan="5" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-tuesday">
            <td colSpan="1" className='tuesday td_schedule'>วันอังคาร</td>
            <td colSpan="9" className='Space td_schedule'></td>
            <td colSpan="6" className='tuesday td_schedule'>
              7142104 | C503<br />
              12:30 - 15:30
            </td>
            <td colSpan="11" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-wednesday">
            <td colSpan="1" className='wednesday td_schedule'>วันพุธ  </td>
            <td colSpan="11" className='Space td_schedule'></td>
            <td colSpan="6" className='wednesday td_schedule'>
              7142104 | M.A3<br />
              13:30 - 16:30
            </td>
            <td colSpan="9" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-thursday">
            <td colSpan="1" className='thursday td_schedule'>วันพฤหัสบดี</td>
            <td colSpan="1" className='Space td_schedule'></td>
            <td colSpan="8" className='thursday td_schedule'>
              7142401 | C210<br />
              08:30 - 12:30
              </td>
            <td colSpan="2" className='Space td_schedule'>
              1 ชั่วโมง
              </td>
            <td colSpan="6" className='thursday td_schedule'>
              7142101 | C503<br />
              13:30 - 16:30
              </td>
            <td colSpan="9" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-friday">
            <td colSpan="1" className='friday td_schedule'>วันศุกร์</td>
            <td colSpan="1" className='Space td_schedule'></td>
            <td colSpan="6" className='friday td_schedule'>
              1500102 | ห้อง A3-331<br />
              08:30 - 11:30
            </td>
            <td colSpan="19" className='Space td_schedule'></td>
          </tr>
        </tbody>
      </table>
      </div>
      <br /><br />
      <p className='Cut'>==============================================================</p>
      <br /><br />
      <div className='NPRUCS66_schedule-heading'>
      <h2 className='s44'>หมู่เรียน 66/44</h2>
        <div className='NPRUCS66_schedule_box'>
          <p className='NPRUCS66_schedule-description1'>
          ===============================================<br />
          2000202 สีสันแห่งชีวิต<br />
          อาจารย์หลายท่าน (7 ท่าน)<br />
          -----------------------------------------------<br />
          7142101	สถิติสำหรับนักวิทยาศาสตร์<br />
          ผศ.ดร. ณัฐพัชญ์ ศรีราจันทร์<br />
          -----------------------------------------------<br />
          7142401	การเขียนโปรแกรมเชิงวัตถุ<br />
          ผศ. นันทิยา หลิมศิโรรัตน์<br />
          -----------------------------------------------<br />
          1500102	ทักษะการฟังและการพูดภาษาอังกฤษ<br />
          อาจารย์ บูลยา สอดศรี<br />
          -----------------------------------------------<br />
          1500201	ภาษาอังกฤษเพื่อการสื่อสารข้ามวัฒนธรรม<br />
          ดร. ณัฐฐิรา ปุยะกุล ซวิค<br />
          -----------------------------------------------<br />
          7142104	คณิตศาสตร์ดีสครีต<br />
          ผศ.ดร. ภรัณยา ปาลวิสุทธิ์<br />
          -----------------------------------------------<br />
          </p>
          <br />
          <p className='NPRUCS66_schedule-description2'>
          ===============================================<br />
          เวลา 12:30 - 15:30 น. | วันจันทร์<br />
          ห้อง ป.A3<br />
          -----------------------------------------------<br />
          เวลา 08:30 - 11:30 น. | วันพฤหัสบดี<br />
          ห้อง C503<br />
          -----------------------------------------------<br />
          เวลา 13:30 - 17:30 น. | วันพฤหัสบดี<br />
          ห้อง C210<br />
          -----------------------------------------------<br />
          เวลา 12:30 - 15:30 น. | วันศุกร์<br />
          ห้อง A3-331<br />
          -----------------------------------------------<br />
          เวลา 08:30 - 11:30 น. | วันอังคาร<br />
          ห้อง 15/13/2<br />
          -----------------------------------------------<br />
          เวลา 15:30 - 18:30 น. | วันอังคาร<br />
          ห้อง C506<br />
          -----------------------------------------------<br />
          </p>
        <br />
        </div>
      </div>
      <div>
      <table className="table_schedule" id='s44'>
        <thead>
          <tr className="head_detail">
            <th className="head_spaceday" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
            <th className="head_space" colSpan="1" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="body_detail-monday">
            <td colSpan="1" className='monday td_schedule'>วันจันทร์</td>
            <td colSpan="9" className='Space td_schedule'></td>
            <td colSpan="6" className='monday td_schedule'>
              2000202 | M.A3<br />
              12:30 - 15:30 <br />
            </td>
            <td colSpan="11" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-tuesday">
            <td colSpan="1" className='tuesday td_schedule'>วันอังคาร</td>
            <td colSpan="1" className='Space td_schedule'></td>
            <td colSpan="6" className='tuesday td_schedule'>
              1500201 | 15/13/2<br />
              08:30 - 11:30<br />
            </td>
            <td colSpan="8" className='Space td_schedule'>
              4 ชั่วโมง
            </td>
            <td colSpan="6" className='tuesday td_schedule'>
              7142104 | C506<br />
              15:30 - 18:30<br />
            </td>
            <td colSpan="5" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-wednesday">
            <td colSpan="1" className='wednesday td_schedule'>วันพุธ</td>
            <td colSpan="26" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-thursday">
            <td colSpan="1" className='thursday td_schedule'>วันพฤหัสบดี</td>
            <td colSpan="1" className='Space td_schedule'></td>
            <td colSpan="6" className='thursday td_schedule'>
              7142101 | C503<br />
              08:30 - 11:30
            </td>
            <td colSpan="4" className='Space td_schedule'>
              2 ชั่วโมง
            </td>
            <td colSpan="8" className='thursday td_schedule'>
              7142401 | C210<br />
              13:30 - 17:30
              </td>
            <td colSpan="9" className='Space td_schedule'></td>
          </tr>
          {/* //////////////////////////////////////////////////// */}
          <tr className="body_detail-friday">
            <td colSpan="1" className='friday td_schedule'>วันศุกร์</td>
            <td colSpan="9" className='Space td_schedule'></td>
            <td colSpan="6" className='friday td_schedule'>
              1500102 | A3-331<br />
              12:30 - 15:30
            </td>
            <td colSpan="11" className='Space td_schedule'></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Schedule