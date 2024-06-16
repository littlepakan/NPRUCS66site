// import { Link } from 'react-router-dom';
// import thclick from '../../assets/sounds/thclick.wav';
// import thback from '../../assets/sounds/thback.wav';
// import "./linkbeta.css"
// //BEM -> Block Element Modifier

// const th_click = () => {
//   new Audio(thclick).play()
// };

// const th_back = () => {
//   new Audio(thback).play()
// };


// //เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>

// const Linksbeta = () => {
//   return (
//     <>
//         <main>
//           <section className="menu-grid">
//             {/* 1 */}
//             <div className="gridbox">

//               <div className="menu-head-r">
//                 <div className="menu-rim-r"></div>
//                 <div className="menu-char-r">
//                   - ข่าวสาร -
//                 </div>
//                 <div className="menu-rim-r"></div>
//               </div>
              
//             <Link to='/' className="menu-selection-r" onClick={th_click}>หน้าแรก</Link>

//             </div>

//             {/* 2 */}
//             <div className="gridbox">

//               <div className="menu-head-b">
//               <div className="menu-rim-b"></div>
//               <div className="menu-char-b">
//                 - บันทึก -</div>
//               <div className="menu-rim-b"></div>
//             </div>

//             <a className="nodcr" href="https://docs.google.com/spreadsheets/d/1KZjjdjPiYrJO527PIa-7PZq73aBRRI_qIq5URhX4kvQ" traget="_blank">
//               <p className="menu-selection-b">
//                 การบ้าน
//               </p>
//             </a>
//             <a className="nodcr" href="" traget="_blank">
//               <p className="menu-selection-b">
//                 ตารางเรียน (เร็วๆ นี้)
//               </p>
//             </a>
//             <a className="nodcr" href="stdname.html" traget="_blank">
//               <p className="menu-selection-b">
//                 รายชื่อนักศึกษา (เร็วๆ นี้)
//               </p>
//             </a>
//             <p className="menu-selection-b"></p>
                            
//             </div>
//             {/* 3 */}
//             <div className="gridbox">

//               <div className="menu-head-g">
//                 <div className="menu-rim-g"></div>
//                 <div className="menu-char-g">
//                   - แหล่งจำเป็น -
//                 </div>
//                 <div className="menu-rim-g"></div>
//               </div>

//               <a className="nodcr" href="https://reg.npru.ac.th/registrar/home.asp" traget="_blank">
//                 <p className="menu-selection-g">
//                   งานทะเบียน (reg)
//                 </p>
//               </a>
//               <a className="nodcr" href="http://alumni.npru.ac.th/activity/" traget="_blank">
//                 <p className="menu-selection-g">
//                   เช็คเวลากิจกรรม
//                 </p>
//               </a>
//               <a className="nodcr" href="https://ac.npru.ac.th/index.php?act=6a992d5529f459a44fee58c733255e86&lntype=editor_left&slm_id=2001" traget="_blank">
//                 <p className="menu-selection-g">
//                   ปฏิทินการศึกษา
//                 </p>
//               </a>
//               <p className="menu-selection-g"></p>
            
//             </div>
                    
//             {/* 5 */}
//             <div className="gridbox">

//               <div className="menu-head-pp">
//                 <div className="menu-rim-pp"></div>
//                 <div className="menu-char-pp">
//                   - ติดต่อ / อื่นๆ -
//                 </div>
//                 <div className="menu-rim-pp"></div>
//               </div>

//               <a className="nodcr" href="https://www.facebook.com/profile.php?id=100093641293751">
//                 <p className="menu-selection-pp">
//                   Facebook
//                 </p>
//               </a>
//               <a className="nodcr" href="https://discord.gg/XsVr73YC" traget="_blank">
//                 <p className="menu-selection-pp">
//                   Discord (Server)
//                 </p>
//               </a>
//               <a className="nodcr" href="https://pgm.npru.ac.th/tlc/system/20181017191458_30d71ac7d917af1c8bcc6f2471e154b1.pdf" traget="_blank">
//                 <p className="menu-selection-pp">
//                   ยื่นใบลากิจ/ป่วย
//                 </p>
//               </a>
//               <a className="nodcr" href="credit.html" traget="_blank">
//                 <p className="menu-selection-pp">
//                   บันทึกการเปลี่ยนแปลง
//                 </p>
//               </a>
              
//             </div>
//           </section>
//         </main>
      
//       {/* ------------------------------------------------------------------- */}

//       {/* <Cart />

//       <Password isvalid={true} />

//       <User //<== ชื่อไฟล์ที่จะดึงข้อมูล
//       img="https://avatars.githubusercontent.com/u/147511037?v=4" 
//       name="Medicine"
//       number={20}
//       hobby={["Suzuran", "Susan", "Poison"]}
//       realData={{name: "Medi", year: "2"}}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ipsum dolorum facilis beatae velit quasi aspernatur minus facere magnam consequatur rem fugit quidem enim asperiores, quas eos voluptatem accusamus dolorem!
//         </p>
//       </User>
//       {randNum.map(number =>(
//         <ul key={Math.random()}>
//           <li>
//             {number}
//           </li>
//         </ul>
//       ))}
//       {userInfo.map(info =>(
//         <ul key={Math.random()}>
//           <li>
//             {info.stdID}
//           </li>
//           <li>
//             {info.stdName}
//           </li>
//         </ul>
//       ))}

//       <div >
//         <Add />
//         <Greeting />
//         <section classNameName = "first">
//           this is a section
//         </section>
//         <h1 classNameName = "text-5xl font-bold">
//           wtf
//         </h1>
//         <article>
//           this is an article
//         </article>
//       </div> */}
//     </>
//   )
// };  

// export default Linksbeta