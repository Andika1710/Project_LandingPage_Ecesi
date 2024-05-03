import React from 'react'
import herocrop from '../../assets/herocrop.png'
import NavigationBar from '../../elements/NavigationBar'

const Hero = () => {
  return (
    <>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className='container mx-auto lg:px-[96px] px-[24px]  justify-center items-center '>
                <NavigationBar/>
                <figure className=' py-[124px] flex-row lg:flex block justify-center items-center  '>
                  <div className='flex justify-center items-center lg:flex-none'>
                    <img className='lg:border-r-[3px] px-[30px] lg:mr-[30px] lg:border-globalGreen lg:h-[400px] ' src={herocrop} alt="logoECESI" />
                  </div>
                  
                    <figcaption className='text-center max-w-full lg:text-left lg:mr-[30px] '>
                      <p className='text-[25px] lg:text-[36px] lg:leading-[43.2px] text-globalGreen font-bold font-jakarta'>Eastasouth Conference On</p>
                      <p className='text-[30px] lg:text-[56px] lg:leading-[63.2px] text-globalGreen font-bold font-jakarta'>ENVIRONMENTAL </p>
                      <p className='text-[30px] lg:w-[600px] lg:text-[56px] lg:leading-[63.2px] text-globalGreen font-bold font-jakarta'>AND SUSTAINABILITY</p>
                      <div className='lg:flex block gap-2 lg:items-center '>
                        <p className='text-[30px] lg:text-[56px] lg:leading-[63.2px] text-globalGreen font-bold font-jakarta'>ISSUES</p>
                        <div className='flex justify-center text-center '>
                      <p className='w-[65px] lg:w-[100px] lg:h-[40px] lg:-[43px] font-bold font-jakarta opacity-100 bg-globalGreen rounded-[10px] lg:flex lg:justify-center items-center text-white lg:text-[30px]'>2024</p>
                      </div>
                      </div>
                      <p className='lg:text-[18px] lg:w-[350px] lg:leading-[24.2px] font-semibold font-jakarta'>Addressing Environmental Challenges For A Better Tomorrow</p>
                    </figcaption>
                   
                </figure>
            </div>
        </div>
    </>
  )
}

export default Hero