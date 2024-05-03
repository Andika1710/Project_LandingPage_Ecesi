import React, { useState } from 'react'
import logoEce from '../../assets/logo_w.png'
import logoH from '../../assets/ECESI2x.png'
import menu from '../../assets/menuMobile.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  
  const [side, setSide] = useState(false)
  const menuSide = ()=>{
    setSide(!side)
  }

  return (
    <>
        <div className='header w-full bg-globalGreen h-[45px] lg:h-[90px]'>
            <div className='container  flex lg:justify-center lg:items-center justify-between px-[35px] md:px-[35px]  max-w-full   items-center py-[7px] lg:py-4'>
            <div className='flex gap-[10px] lg:gap-[16px] px-[5px] lg:justify-center  lg:items-center '>
                      <img className='h-[32px] lg:h-[60px]  ' src={logoEce} alt="logoEcesi" />
                  <div>
                      <img className='h-[12px] lg:h-[20px] ' src={logoH} alt="TextECESI" />
                    <p className=' text-[10px] lg:text-[12px] leading-[15px] text-white '>2024</p>
                  </div>
                </div>
                <button onClick={menuSide}>
                  <img className='h-[17px] block lg:hidden' src={menu} alt="iconMenu" />
                </button>
            </div>
            {
            side && 
            <div className=' flex items-end justify-end flex-col'>
              <button className=' bg-white hover:bg-green-800  mr-[10px] mt-2  pt-[18px] pb-2  rounded-t-lg px-[46px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#submitPaper">Call for paper</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-green-800  mr-[10px]  py-[10px]  px-[30px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#papersubmission">Paper submission</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-green-800  mr-[10px]  py-[10px] px-[36px] '>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#importantdate ">Important dates </a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-green-800  mr-[10px] py-[10px]  px-[52px] '>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#registration">Registration</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-green-800  mr-[10px]  py-[10px] px-[65px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#speakers">Speakers</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-green-800  mr-[10px] py-[10px] px-[76px] rounded-b-lg'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><Link className='border-b border-borderMobile w-full pb-[10px] items-center  hover:text-white justify-center flex' to='/about'>About </Link></li>
              </ul>
              </button>
    

            </div>
            }
        </div>
    </>
  )
}

export default Header