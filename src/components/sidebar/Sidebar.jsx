/** @format */
'use client';
import './sidebar.scss';

export default function Sidebar({openSidebar}) {
   return (
      <div className={openSidebar ? 'sidebarWrap active' : 'sidebarWrap'}>
         <div className='logo'>
            <img src='./logo.png' alt='' className='logoImg' />
         </div>
         <hr />
         <div className='list'>
            <div className='item'>
               <div className='icon'>
                  <img src='./home.png' alt='' />
               </div>
               <p className='text'>Trang chủ</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./danhsachtaisan.png' alt='' />
               </div>
               <p className='text'>Danh sách tài sản</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./capphatthuhoi.png' alt='' />
               </div>
               <p className='text'>Cấp phát - Thu hồi</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./dieuchinhbangiao.png' alt='' />
               </div>
               <p className='text'>Điều chuyển -Bàn giao</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./suachuabaoduong.png' alt='' />
               </div>
               <p className='text'>Sửa chữa - Bảo dưỡng</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./mathuythanhly.png' alt='' />
               </div>
               <p className='text'>Mất - Hủy - Thanh Lý</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./kiemke.png' alt='' />
               </div>
               <p className='text'>Kiểm kê</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./xoaganday.png' alt='' />
               </div>
               <p className='text'>Dữ liệu xóa gần đây</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./caidat.png' alt='' />
               </div>
               <p className='text'>Cài đặt chung</p>
            </div>
            <div className='item'>
               <div className='icon'>
                  <img src='./cd365.png' alt='' />
               </div>
               <p className='text'>Chuyển đổi số</p>
            </div>
         </div>
      </div>
   );
}
