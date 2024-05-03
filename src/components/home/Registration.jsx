import React from 'react'
import ButtonPay from '../../elements/ButtonPay'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Registration = () => {
  return (
    <>
   <div className='bg-white w-full' id='registration'>
        <div className='container mx-auto px-[36px] py-[56px] font-jakarta '>
            <h1 className='text-[18px] leading-[21.6px] lg:text-[36px] lg:leading-[43.2px]  font-extrabold text-green-800 flex justify-center items-center'>REGISTRATION</h1>
            <div className='card'>
                <p className='text-[14px] leading-[24px] font-bold my-[24px] flex justify-center items-center lg:text-[30px] lg:leading-[24px] lg:mt-[56px] lg:mb-[44px'>INDONESIA</p>
                <div className='lg:flex justify-center items-center gap-[24px]'>
                    <div  data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col justify-center items-center border rounded-[24px] shadow-lg lg:px-[45px]'>
                        <p className='pt-[20px] text-[14px] lg:text-[24px] leading-[24px] font-bold text-green-800'>PRESENT</p>
                        <p className='my-[14px] lg:my-[44px] text-[16px] lg:text-[24px] leading-[24px] font-bold '>IDR 3.000.000</p>
                        <p className='text-[14px] leading-[24px] font-medium text-ungu lg:text-[16px]'>onsite & online</p>
                        <Link to='/registration'>
                            <ButtonPay
                            customButton="my-[20px]"/>
                        </Link>
                    </div>
                    <div  data-aos-delay="500" data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col justify-center items-center border rounded-[24px] shadow-lg lg:px-[45px] my-[24px] lg:my-0'>
                        <p className='pt-[20px] text-[14px] lg:text-[24px] leading-[24px] font-bold text-green-800'>AUDIENCE</p>
                        <p className='my-[14px] lg:my-[44px] text-[16px] lg:text-[24px] leading-[24px] font-bold '>IDR 1.000.000</p>
                        <p className='text-[14px] leading-[24px] font-medium text-ungu lg:text-[16px]'>onsite</p>
                        <Link to='/registration'>
                            <ButtonPay
                            customButton="my-[20px]"/>
                        </Link>
                    </div>
                    <div data-aos-delay="800" data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col justify-center items-center border rounded-[24px] shadow-lg lg:px-[45px]'>
                        <p className='pt-[20px] text-[14px] lg:text-[24px] leading-[24px] font-bold text-green-800'>AUDIENCE</p>
                        <p className='my-[14px] lg:my-[44px] text-[16px] lg:text-[24px] leading-[24px] font-bold '>IDR 1.000.000</p>
                        <p className='text-[14px] leading-[24px] font-medium text-ungu lg:text-[16px]'>onsite</p>
                        <Link to='/registration'>
                            <ButtonPay
                            customButton="my-[20px]"/>
                        </Link>
                    </div>
                </div>
                <p className='text-[14px] leading-[24px] font-bold my-[24px] flex justify-center items-center lg:text-[30px] lg:leading-[24px] lg:mt-[56px] lg:mb-[44px]'>INTERNATIONAL</p>
                <div className='lg:flex justify-center items-center gap-[24px] lg:px-[45px]'>
                <div data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col justify-center items-center border rounded-[24px] shadow-lg lg:px-[45px]'>
                        <p className='pt-[20px] text-[14px] lg:text-[24px] leading-[24px] font-bold text-green-800'>PRESENT</p>
                        <p className='my-[14px] lg:my-[44px] text-[16px] lg:text-[24px] leading-[24px] font-bold '>USD 250</p>
                        <p className='text-[14px] leading-[24px] font-medium text-ungu lg:text-[16px]'>onsite</p>
                        <Link to='/registration'>
                            <ButtonPay
                            customButton="my-[20px]"/>
                        </Link>
                    </div>
                    <div data-aos-delay="500" data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col justify-center items-center border rounded-[24px] shadow-lg lg:px-[45px] lg:mt-0 mt-[24px] '>
                        <p className='pt-[20px] text-[14px] lg:text-[24px] leading-[24px] font-bold text-green-800'>AUDIENCE</p>
                        <p className='my-[14px] lg:my-[44px] text-[16px] lg:text-[24px] leading-[24px] font-bold '>USD 74</p>
                        <p className='text-[14px] leading-[24px] font-medium text-ungu lg:text-[16px]'>onsite</p>
                        <Link to='/registration'>
                            <ButtonPay
                            customButton="my-[20px]"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registration