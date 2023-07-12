/** @format */

import Image from 'next/image';
import './page.scss';
// import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
   return (
      <div className='homes'>
         <div className='bannel'>
            <img src='./dl_app_pc2.png' alt='' className='img1' />
            <img src='./dl_app_pc1.png' alt='' className='img2' />
         </div>
         <div className='title'>Tổng quan</div>
         <div className='khoi_lon'>
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
      </div>
   );
}
