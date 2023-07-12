/** @format */

import Image from 'next/image';
import './page.scss';
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
   return (
      <div className='homes'>
         <div className='bannel'>
            <img src='./dl_app_pc2.png' alt='' className='img1' />
            <img src='./dl_app_pc1.png' alt='' className='img2' />
         </div>
         <div className='title'>Tổng quan</div>
         <div className='khoi_lon row'>
            <div className='khoi_nho_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho'>
                  <div className='top'>
                     <div className='img'>
                        <img src='./cp_icon.png' alt='' />
                     </div>
                     <p className='content'>Cấp phát</p>
                  </div>
                  <div className='bottom'>
                     <p className='content'>0 Biên bản</p>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho'>
                  <div className='top'>
                     <div className='img'>
                        <img src='./th_icon.png' alt='' />
                     </div>
                     <p className='content'>Thu hồi</p>
                  </div>
                  <div className='bottom'>
                     <p className='content'>0 Biên bản</p>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho'>
                  <div className='top'>
                     <div className='img'>
                        <img src='./dc_bg_icon.png' alt='' />
                     </div>
                     <p className='content'>Điều chuyển-bàn giao</p>
                  </div>
                  <div className='bottom'>
                     <p className='content'>0 Biên bản</p>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho'>
                  <div className='top'>
                     <div className='img'>
                        <img src='./sc_bg_icon.png' alt='' />
                     </div>
                     <p className='content'>Sửa chữa-bảo dưỡng</p>
                  </div>
                  <div className='bottom'>
                     <p className='content'>0 Biên bản</p>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho'>
                  <div className='top'>
                     <div className='img'>
                        <img src='./m_h_tl_icon.png' alt='' style={{width: '30px'}} />
                     </div>
                     <p className='content'>Mất ,hủy,thanh lý</p>
                  </div>
                  <div className='bottom'>
                     <p className='content'>0 Biên bản</p>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho'>
                  <div className='top'>
                     <div className='img'>
                        <img src='./kk_icon.png' alt='' />
                     </div>
                     <p className='content'>Kiểm kê</p>
                  </div>
                  <div className='bottom'>
                     <p className='content'>0 Biên bản</p>
                  </div>
               </div>
            </div>
         </div>
         <div className='title'>Ưu điểm vượt trội của hệ sinh thái Chuyển đổi số 365</div>
         <div className='khoi_lon row'>
            <div className='khoi_nho_2_wrap col-sm-6 col-md-4 '>
               <div className='khoi_nho_2'>
                  <div className='top'>
                     <img src='./uudiem1.png' alt='' />
                  </div>
                  <div className='mid'>
                     <div className='title'>An toàn và bảo mật</div>
                     <div className='content'>An toàn, bảo mật tuyệt đối, dữ liệu được lưu trữ theo mô hình điện thoại đám mây.</div>
                  </div>
                  <div className='bot'>
                     <button>
                        <p>Xem chi tiết</p>
                        <div className='img'>
                           <img src='./arrow_right_blue.png' alt='' />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_2_wrap col-sm-6 col-md-4'>
               <div className='khoi_nho_2'>
                  <div className='top'>
                     <img src='./uudiem2.png' alt='' />
                  </div>
                  <div className='mid'>
                     <div className='title'>Một nền tảng duy nhất</div>
                     <div className='content'>An toàn, bảo mật tuyệt đối, dữ liệu được lưu trữ theo mô hình điện thoại đám mây.</div>
                  </div>
                  <div className='bot'>
                     <button>
                        <p>Xem chi tiết</p>
                        <div className='img'>
                           <img src='./arrow_right_blue.png' alt='' />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_2_wrap col-sm-6 col-md-4'>
               <div className='khoi_nho_2'>
                  <div className='top'>
                     <img src='./uudiem3.png' alt='' />
                  </div>
                  <div className='mid'>
                     <div className='title'>Ứng dụng công nghệ AI</div>
                     <div className='content'>An toàn, bảo mật tuyệt đối, dữ liệu được lưu trữ theo mô hình điện thoại đám mây.</div>
                  </div>
                  <div className='bot'>
                     <button>
                        <p>Xem chi tiết</p>
                        <div className='img'>
                           <img src='./arrow_right_blue.png' alt='' />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_2_wrap col-sm-6 col-md-4'>
               <div className='khoi_nho_2'>
                  <div className='top'>
                     <img src='./uudiem4.png' alt='' />
                  </div>
                  <div className='mid'>
                     <div className='title'>Giải pháp số 1 Việt Nam</div>
                     <div className='content'>An toàn, bảo mật tuyệt đối, dữ liệu được lưu trữ theo mô hình điện thoại đám mây.</div>
                  </div>
                  <div className='bot'>
                     <button>
                        <p>Xem chi tiết</p>
                        <div className='img'>
                           <img src='./arrow_right_blue.png' alt='' />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
            <div className='khoi_nho_2_wrap col-sm-6 col-md-4'>
               <div className='khoi_nho_2'>
                  <div className='top'>
                     <img src='./uudiem5.png' alt='' />
                  </div>
                  <div className='mid'>
                     <div className='title'>Sử dụng miễn phí trọn đời</div>
                     <div className='content'>An toàn, bảo mật tuyệt đối, dữ liệu được lưu trữ theo mô hình điện thoại đám mây.</div>
                  </div>
                  <div className='bot'>
                     <button>
                        <p>Xem chi tiết</p>
                        <div className='img'>
                           <img src='./arrow_right_blue.png' alt='' />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
