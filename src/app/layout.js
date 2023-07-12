/** @format */

import Sidebar from '@/components/sidebar/Sidebar';
import './globals.css';
import {Roboto, Inter} from 'next/font/google';
import Header from '@/components/header/Header';

const inter = Inter({subsets: ['latin']});

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function RootLayout({children}) {
   return (
      <html lang='en'>
         <body className='container'>
            <Sidebar />
            <div className='contentWrap'>
               <Header />
               {children}
            </div>
         </body>
      </html>
   );
}
