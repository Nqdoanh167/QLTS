/** @format */

import React, {useState} from 'react';
import './header.scss';

export default function Header({setOpenSidebar, openSidebar}) {
   const [openMes, setOpenMes] = useState(false);
   const [openWarn, setOpenWarn] = useState(false);
   const [openNoti, setOpenNoti] = useState(false);
   const [openP, setOpenP] = useState(false);

   return (
      <div className='headerWrap'>
         <div className='header'>
            <div className='headerText'>Trang chủ</div>
            <div className='header-list'>
               <div className='item-mes'>
                  <img src='./mess.png' alt='' />
                  <div className='sl'>2</div>
               </div>

               <div
                  className='item-warn'
                  onClick={() => {
                     setOpenWarn(!openWarn);
                     setOpenNoti(false);
                  }}
               >
                  <img src='./remind.png' alt='' />
                  <div className={openWarn ? 'khoi_warn active' : 'khoi_warn'}>
                     <div className='top_warn'>
                        <h4>Nhắc nhở</h4>
                        <div className='close_warn'>
                           <img src='x_den.png' alt='' />
                        </div>
                     </div>
                     <div className='mid_warn'></div>
                     <div className='bot_warn'>
                        <p>Đánh dấu đã xem tất cả</p>
                     </div>
                  </div>
               </div>

               <div
                  className='item-notify'
                  onClick={() => {
                     setOpenNoti(!openNoti);
                     setOpenWarn(false);
                  }}
               >
                  <img src='./noti.png' alt='' />
                  <div className={openNoti ? 'khoi_noti active' : 'khoi_noti'}>
                     <div className='top_noti'>
                        <h4>Thông báo</h4>
                        <div className='close_noti'>
                           <img src='x_den.png' alt='' />
                        </div>
                     </div>
                     <div className='mid_noti'></div>
                     <div className='bot_noti'>
                        <p>Đánh dấu đã xem tất cả</p>
                     </div>
                  </div>
               </div>

               <div
                  className='item-profile'
                  onClick={() => {
                     setOpenP(!openP);
                     setOpenWarn(false);
                     setOpenNoti(false);
                  }}
               >
                  <div className='imgmember'>
                     <img src='./img_member.jpg' alt='' />
                  </div>
                  <div className='name'>Bùi Thị Thanh Xuân</div>
                  <div className='muiten'>
                     <img src='./muitenxuong.png' alt='' />
                  </div>
                  <div className={openP ? 'profile-details active' : 'profile-details'}>
                     <div className='item'>
                        <img src='./profile_black.png' alt='' />
                        <p className='text'>Thông tin tài khoản</p>
                     </div>
                     <div className='item'>
                        <img src='./edit_black.png' alt='' />
                        <p className='text'>Đánh giá</p>
                     </div>
                     <div className='item'>
                        <img src='./warning_black.png' alt='' />
                        <p className='text'>Báo lỗi</p>
                     </div>
                     <div className='item'>
                        <img src='./Q_black.png' alt='' />
                        <p className='text'>Hướng dẫn</p>
                     </div>
                     <div className='item'>
                        <img src='./logout.png' alt='' />
                        <p className='text'>Đăng xuất</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='header_menu'>
            <button className='btn_sidebar' onClick={() => setOpenSidebar(!openSidebar)}>
               <img src='./btn_sidebar.png' alt='' />
            </button>
            <div className='right_menu'>
               <div className='item-mes'>
                  <img src='./mess_1024.png' alt='' />
                  <div className='sl'>2</div>
               </div>

               <div
                  className='item-warn'
                  onClick={() => {
                     setOpenWarn(!openWarn);
                     setOpenNoti(false);
                  }}
               >
                  <img src='./recomment_1024.png' alt='' />
               </div>

               <div className='item-notify'>
                  <img src='./noti_1024.png' alt='' />
               </div>

               <div className='item-profile'>
                  <div className='imgmember'>
                     <img src='./img_member.jpg' alt='' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
