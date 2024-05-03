import React from 'react'
import herocrop from '../../assets/herocrop.png'
import NavigationBar from '../../elements/NavigationBar'

const AboutHero = () => {
  return (
    <>
    <div id='AboutHero'>
    <div className=' lg:bg-hero-pattern bg-none bg-cover bg-no-repeat bg-center'>
        <div className='container mx-auto px-[47px]' >
            <NavigationBar/>
            <p className='text-[20px] leading-[24px] font-extrabold font-jakarta text-globalGreen flex justify-center items-center text-center py-[30px] lg:mt-[56px] lg:text-[36px] lg:leading-[43.2px]'>ABOUT</p>
            <figure className='flex justify-center items-center lg:py-[46px]'>
                <img className=' border-r-2 pr-[5px] mr-[5px] h-[110px] lg:h-[146px] lg:ml-[142px] lg:items-center' src={herocrop} alt="LogoEcesi" />
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
        </div>
      </div>
      </div>
    </>
  )
}

export default AboutHero