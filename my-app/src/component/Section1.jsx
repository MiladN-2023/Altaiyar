import styles from './main.module.css'
import Image from 'next/image'
import back from '../../public/main-banner-4.jpg'
import icon1 from '../../public/icon1.png'
import icon2 from '../../public/icon2.png'
import icon3 from '../../public/icon3.png'
const Section1 = () => {
  return (
    <div className={styles.sec1}>
        <Image src={back} className='w-100 h-100 position-relative'/>
        <h1 className={styles.textbanner}>الأمثل ، الأسرع ، الأول</h1>
        <div className={styles.sec2}>
          <div>
            <Image src={icon1}/>
            <h1>خدمات لوجستية</h1>
            <p>لدى عملك الكثير لتقدمه أكثر من مجرد خدمة لوجستية عادية</p>
            <p>نحن نقدم خدمات لوجستية تتجاوز أساسيات نقل البضائع من نقطة إلى أخرى. نجد ما هو مفقود في سلسلة التوريد الخاصة بك ونقدمها في الوقت المحدد ، في كل مرة</p>
            <p>غالبًا ما يكون شركاؤنا أصحاب أعمالهم الخاصة ، وقد نجحوا في الشراكة معنا لتلبية جميع احتياجاتهم اللوجستية. لهذا السبب نقول إننا شريك نجاحك</p>
          </div>
          <div>
          <Image src={icon2}/>
          <h1>التعبئة و التغليف و التخزين</h1>
          <p>كل شيء صغير عليه ملصق #التيار_السريع هو امتداد لفريقنا ، ونحن نفخر بما نقوم به.</p>
          <p>من الصناديق إلى الشريط ، والملصقات إلى مواد الشحن ، لا أحد يفعل ذلك أفضل منا.</p>
          <p>لقد سعينا جاهدين لغزو هذا المجال من خلال تقديم أفضل خدمة بهدف واحد فقط وهو خدمة عملائنا. وبعد كل هذه السنوات ، أنجزنا الأميال والأميال .</p>

          <p>#التيار_السريع</p>
        </div>
        <div>
          <Image src={icon3}/>
          <h1>الشحن البري</h1>
          <p>نحن طموحون وملتزمون بتقديم أفضل خدمات الشحن لعملائنا وشركائنا ، وبذلك نكون أكثر خدمة لبلدنا.</p>
          <p>➤ سنأخذك إلى حيث تريد</p>
          <p>➤ سنبقيك على اطلاع بالرحلة</p>
          <p>➤ سنقوم بتسليم البضائع الخاصة بك في الوقت المناسب وذلك أيضًا بابتسامة</p>

          <p>#اكيد_توصل</p>
        </div>
        </div>
        <div className='container d-flex flex-column justify-content-center align-items-center bg-dark border-top border-danger text-light my-5 p-5'>
          <h5 className='text-danger my-5'>من نحن</h5>
          <h1>التيار السريع للنقل البري</h1>
          <hr />
          <p>تأسست ضمن رؤية واضحة وهي العمل على إن تكون ضمن الشركات الوطنية العملاقة في مجال
النقل البري في المملكة العربية السعودية</p>
        </div>
        <div className='container d-flex flex-column justify-content-center align-items-center gap-3 bg-danger p-5'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h4>رحلة شحن يومياً</h4>
            <p>40</p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h4>شحنة أسبوعياً</h4>
            <p>1,240</p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h4>امر شحن سنوياً</h4>
            <p>14,880</p>
          </div>
        </div>
        <hr className='border-bottom border-5 border-dark w-75 '/>
        <div className='container d-flex flex-column justify-content-center align-items-center gap-2 '>
          <h1 className='fw-bold'>أكثر من 20 سنة خبرة في هذا المجال</h1>
          <p>هناك العديد من الأسباب التي تجعلنا نقدم خدمة التوصيل من الباب إلى الباب والتوصيل في نفس اليوم. ولا يتعلق الأمر بالراحة فقط. إنه أمر بالغ الأهمية لأن خدماتنا تساعد في تقليل تكاليف النقل وخفض استهلاك الوقود وتخفيف الازدحام المروري ولكن هذا ليس كل شيء – فمع خدمتنا من الباب إلى الباب ، يمكنك توفير وقتك الذي كنت ستضيعه في الانتظار</p>
        </div>
        <div className='bg-danger p-5 fw-bold d-flex justify-content-center align-items-start'>
          <h1>دعنا نزيح عنك عناء التفكير في شحناتك!</h1>
        </div>
    </div>
  )
}

export default Section1