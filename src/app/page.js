/** @format */

import Image from 'next/image';
import './page.scss';
import 'styles/custom-bootstrap.css';
export default function Home() {
   return (
      <div className='home'>
         <div className='bannel'>
            <img src='./dl_app_pc2.png' alt='' className='img1' />
            <img src='./dl_app_pc1.png' alt='' className='img2' />
         </div>
         <div className='title'>Tổng quan</div>
      </div>
   );
}
