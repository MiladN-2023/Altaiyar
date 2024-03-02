import about from '../../../public/about.jpg'
import icon1 from '../../../public/map.png'
import icon2 from '../../../public/icon3.png'
import icon3 from '../../../public/box.png'
import icon4 from '../../../public/calender.png'
import ts3 from '../../../public/TS5.jpg'
import ts5 from '../../../public/TS5.jpg'
import ts2 from '../../../public/TS2.jpg'
import Image from 'next/image'
const About = () => {
  return (
    <div > 
        <div className='position-relative'>
            <Image src={about} className='w-100 h-75 ' />
        
        </div>
        
        <div className='container w-75 bg-light text-dark d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            <Image src={icon1} width={50}/>
            <h2>28</h2>
            <h2>مدينة نغطيها</h2>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            <Image src={icon2} width={50}/>
            <h2>40</h2>
            <h2>رحلة شحن يومياً</h2>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            <Image src={icon3} width={50}/>
            <h2>1,240</h2>
            <h2>شحنة أسبوعياً</h2>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            <Image src={icon4} width={50}/>
            <h2>14,880</h2>
            <h2>امر شحن سنوياً</h2>
        </div>
        </div>
        <div className='d-flex flex-column justify-content-center container gap-3 my-5'>
            <Image src={ts3} className='w-100 h-75'/>
            <h1 className='fw-bold'>البداية …</h1>
            <p>تأسست مؤسسة التيار السريع لنقل البري في عام 2002م باسم الهديب، وتم تغير الاسم إلي التيار السريع في عام 2009م بمدينة الرياض.</p>
            <p>ضمن رؤية واضحة وهي العمل على إن تكون ضمن المؤسسات الوطنية العملاقة في مجال النقل البري في المملكة العربية السعودية.</p>

            <h3 className='text-danger'>اطلب عرض سعرك</h3>
        </div>


        <div className='d-flex flex-column justify-content-center container gap-3 my-5'>
            <Image src={ts5} className='w-100 h-75'/>
            <h1 className='fw-bold'>رؤيتنا …</h1>
            <p>تعمل المؤسسة في مجال النقل البري وخدمة التوصيل من والي جميع إنحاء المملكة. نحن نعمل بمعايير عالية</p>
            <p>نهدف من خلالها إلى إرضاء عملائنا عبر الجودة العالية في سرعة التوصيل والمحافظة على البضائع. </p>
            <p>وضمن هذه السياسية تسير المؤسسة بخطي ثابتة ع طريق النمو والمساهمة بشكل كبير في أعمال النقليات في المملكة العربية السعودية.</p>
            <p>كما تفتخر المؤسسة بالموارد البشرية السعودية الوافرة بكل فروع المؤسسة في المجال الإداري</p>
            <p>وتفتخر بالأيادي العاملة متعددة الجنسيات من إداريين وسائقين وعمال مؤهلين تأهيلا عاليا.</p>
            <h3 className='text-danger'>اطلب عرض سعرك</h3>
        </div>

        <div className='d-flex flex-column justify-content-center container gap-3 my-5'>
            <Image src={ts2} className='w-100 h-75'/>
            <h1 className='fw-bold'>هدفنا …</h1>
            <p>ان سياسة المؤسسة تقوم على أن أساس نجاحنا في الحفاظ على ثقة عملائنا يمكن في فهم وتلبية متطلبات عملائنا</p>
            <p>والالتزام المطلق مع العميل حسب اتفاقية المؤسسة للنقل</p>

        </div>
        <div  className='bg-danger text-light p-5 d-flex flex-column justify-contem=nt-center align-items-center '>
            <h1 className='fw-bold'>دائما نتميز</h1>
            <p>رحلاتنا يومية ، و أسعارنا تنافسية ، و سرعة في الشحن ، و نشحن الى جميع مناطق المملكة ،</p>

        </div>
    </div>
  )
}

export default About
