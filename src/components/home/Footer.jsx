import React from 'react'
import herocrop from '../../assets/logoB.png'
import telpon from '../../assets/telpon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='w-full bg-globalGreen'>
        <div className='container lg:flex lg:justify-between mx-auto px-[35px] lg:px-[143px] pt-[40px] pb-[112px]'>
        <figure className='flex justify-center items-center'>
                <img className=' h-[100px] lg:h-[150px] border-r-2 mr-[15px] lg:items-center' src={herocrop} alt="LogoECESI" />
                <figcaption className='text-start lg:text-start lg:mr-[30px]  '>
                      <p className='text-[10px] lg:text-[15px] lg:leading-[13.2px] text-white font-bold'>Eastasouth Conference On</p>
                      <p className='text-[13px] lg:text-[20px] lg:leading-[40px] text-white font-bold font-jakarta'>ENVIROMENTAL</p>
                      <p className=' lg:w-[250px] text-[13px] lg:text-[20px] lg:leading-[10px] text-white font-bold font-jakarta'>AND SUSTAINABIITY</p>
                      <div className='flex gap-2 lg:mt-2 '>
                      <p className='text-[13px]  lg:text-[20px] text-white  font-bold font-jakarta'>ISSUES</p>
                      <div className='lg:mt-1'>
                      <p className='text-[13px] lg:text-[15px] bg-white   font-bold font-jakarta opacity-100 rounded-[5px] px-[10px]  flex justify-center items-center  text-green-800'>2024</p>

                      </div>
                      </div>
                      
                    </figcaption>
            </figure>
            <div className='flex flex-col justify-center items-center
                text-center lg:text-left mt-[32px] text-white lg:w-[232px]'>
                <p className='text-[16px] leading-[30px] font-jakarta font-bold lg:text-left lg:text-[20px] lg:leading-[30px] w-full'>About</p>
                <Link to='/about'>
                    <p className='mt-[20px] text-[12px] leading-[14.4px] lg:text-[14px] lg:leading-[16.8px] font-semibold font-jakarta'>The Eastasouth Conference on Environmental and Sustainability Issues is an international conference organized by the East...</p>
                </Link>
            </div>
            <div className='text-white flex flex-col justify-center items-center text-center '>
                <p className='text-[16px] mt-[31px]  lg:text-[20px] leading-[30px] font-bold font-jakarta'>More Information</p>
                <div className='flex text-center gap-[12px] mt-[10px]'>
                    <img src={telpon} alt="icon Telepon" />
                    <div className='text-[14px] leading-[19.6px] font-bold font-poppins'>
                        <p className='text-left'>Maresta:</p>
                        <p className='w-full'>0821 2121 4028</p>
                    </div>
                </div>
            </div>
        </div>      
    </footer>
    </>
  )
}

export default Footer