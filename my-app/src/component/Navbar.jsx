"use client"
import Image from "next/image"
import styles from './main.module.css'
import logo from '../../public/logo.png'
import menu from '../../public/icons8-menu-50.png'
import Link from "next/link"

import { useState } from "react"
const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  const handleClick = () => {
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }
  return (
    <div className={styles.nav}>
      <Link href={'/'}><Image src={logo} width={40} /></Link>
        
        <Image src={menu} width={25} onClick={handleClick}/>
      {
        toggle&&<div className={styles.menu}>
        <Link href={'/'} className="text-light list-group-item icon-link-hover link-danger">الرئيسية</Link>
        <hr />
        <Link href={'/about'} className="text-light list-group-item icon-link-hover link-danger">من نحن</Link>
        <hr />
        <Link href={'/blog'} className="text-light list-group-item icon-link-hover link-danger">الاخبار</Link>
        <hr />
        <Link href={'/track'} className="text-light list-group-item icon-link-hover link-danger">تتبع الشحنة</Link>

    </div>
      }
      
    </div>
  )
}

export default Navbar