import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ImportantDate = () => {
  return (
    <>
   <div className='bg-globalGreen w-full' id='importantdate'>
        <div className='container mx-auto px-[29px] py-[24px] lg:px-[167px] lg:py-[64px]'>
            <div className='font-jakarta '>
                <h1 className='font-bold lg:text-[36px] lg:leading-[43.2px] flex justify-center items-center  text-[18px] leading-[21.6px]  text-white mb-6'>IMPORTANT DATE</h1>
                <div>
                    <ul>
                        <li data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" className=' flex justify-between items-center border-b border-white pb-[12px] pt-[12px] text-white text-[12px] leading-[15.12px]  lg:text-[24px] lg:leading-[24px] lg:pb-6 lg:mb-6'>
                            <p className='px-[6px] lg:px-[60px]'>14 Augustus 2023</p>
                            <p className='px-[6px] lg:px-[68px]'>Full Paper Submission</p>
                        </li>
                        <li data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" className=' flex justify-between items-center  border-b border-white pb-[12px] pt-[12px] text-white text-[12px] leading-[15.12px]  lg:text-[24px] lg:leading-[24px] lg:pb-6 lg:mb-6'>
                            <p className='px-[6px] lg:px-[60px]'>15 September 2024</p>
                            <p className='px-[6px] lg:px-[68px]'>Decision Notification</p>
                        </li>
                        <li data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" className=' flex justify-between items-center border-b border-white pb-[12px] pt-[12px] text-white text-[12px] leading-[15.12px]  lg:text-[24px] lg:leading-[24px] lg:pb-6 lg:mb-6'>
                            <p className='px-[6px] lg:px-[68px]'>17 September 2024</p>
                            <p className='px-[6px] lg:px-[68px]'>Final Registration</p>
                        </li>
                        <li data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" className=' flex justify-between items-center border-b border-white pb-[12px] pt-[12px] text-white text-[12px] leading-[15.12px]  lg:text-[24px] lg:leading-[24px] lg:pb-6 lg:mb-6'>
                            <p className='px-[6px] lg:px-[68px]'>23 September 2024</p>
                            <p className='px-[6px] lg:px-[68px]'>Camera ready</p>
                        </li>
                        <li data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" className=' flex justify-between items-center border-b border-white pb-[12px] pt-[12px] text-white text-[12px] leading-[15.12px]  lg:text-[24px] lg:leading-[24px] lg:pb-6 lg:mb-6'>
                            <p className='px-[6px] lg:px-[68px]'>21 October 2024</p>
                            <p className='px-[6px] lg:px-[68px]'>Conference Day</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ImportantDate