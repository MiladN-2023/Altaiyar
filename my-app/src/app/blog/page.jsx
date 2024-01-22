import React from 'react'

const Blog = () => {
  return (
    <div>
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <p>غير مصنف</p>
            <h3>أوقات عملنا</h3>
            <hr />
            <br />
            
            <p>منشور في 3 مايو، 2023 بواسطة ALTAYAR EXPRESS</p>

        </div>
        <div className='container d-flex flex-column justify-content-center 
        align-items-start my-4'>
            <p className='fw-light'>يتقدم فريق العمل في التيار السريع للنقل البري   ويفيدكم بأن ساعات العمل  سوف تكون بالفروع من التاسعة صباحا الى صلاة الظهر – ومن الساعة الرابعة مساءً الى التاسعة مساءً ونفيدكم بأن ساعات العمل  لخدمة العملاء من الساعة التاسعة صباحا الى الساعة التاسعة مساء أيام العمل من يوم السبت الى الخميس حسب توقيت المملكة العربية السعودية مع […]</p>
            <p>منشور في غير مصنف</p>
        </div>
        <div className='d-flex flex-column gap-3'>
            <h1 className='fw-bold'>اخبار و مدونة التيار السريع</h1>
            <p>هنا نستعرض معكم آخر الاخبار و المستجدات لشركة التيار السريع و لجميع الخدمات اللوجستية</p>
        </div>
    </div>
  )
}

export default Blog