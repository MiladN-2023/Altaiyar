import { Tajawal } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'


const tajawal = Tajawal({ subsets: ['arabic'] ,weight:["200","300","400","500","700","800","900"]})


export const metadata = {
  title: 'التيار السريع للنقل البري',
  description: 'تأسست ضمن رؤية واضحة وهي العمل على إن تكون ضمن الشركات الوطنية العملاقة في مجال النقل البري في المملكة العربية السعودية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>

        <link rel="icon" href="https://altayarexpress.sa/wp-content/uploads/2022/12/logo.png" type="image/icon type" />

      <body className={tajawal.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
