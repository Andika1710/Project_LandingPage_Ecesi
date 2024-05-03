import React from 'react'
import map from '../../assets/maps.png'
import icon from '../../assets/ico-map.svg'

const Map = () => {
  return (
    <>
     <div>
        <div className='container lg:bg-bgMap lg:bg-no-repeat lg:bg-cover lg:bg-center max-w-full block lg:flex lg:justify-center lg:items-center py-[64px]' id='comittees'>
            <figure className='flex justify-center items-center'>
                <img src={map} alt="GambarMap" />
            </figure>
            <div className='bg-bgMap lg:bg-none flex flex-col justify-center items-center text-white px-[100px] py-[25px]'>
                <p className='text-[18px] lg:text-[36px] lg:leading-[43.2px] leading-[21.6px] font-jakarta font-bold'>VENUE</p>   
                <div className='flex gap-6'>
                    <img className='lg:w-[31px]' src={icon} alt="iconMap" />
                    <p className='text-[14px] lg:text-[30px] lg:leading-[30px] leading-[14px] font-semibold mt-[12px]'>jakarta, Indonesia</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Map