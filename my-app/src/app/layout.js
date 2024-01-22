import { Tajawal } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'




const tajawal = Tajawal({ subsets: ['arabic'],weight:["200","300","400","500","700"] })

export const metadata = {
  title: 'الرئيسية|التيار السريع',
  description: 'سمسما للشحن انطلق الان ',
};

export default function RootLayout({ children }) {

  return (
    <html lang="ar" dir='rtl' className='bg-white'> 

      <body className={tajawal.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
