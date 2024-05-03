import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='pt-[21px]'>
        <ul className='lg:flex hidden justify-between text-globalGreen text-[18px] leading-[16px] font-semibold'>
            <li><a className='hover:text-black' href="/#submitPaper">Call for paper</a></li>
            <li><a className='hover:text-black' href="/#papersubmission">Paper submission</a></li>
            <li><a className='hover:text-black' href="/#importantdate ">Important dates </a></li>
            <li><a className='hover:text-black' href="/#registration">Registration</a></li>
            <li><a className='hover:text-black' href="/#speakers">Speakers</a></li>
            <li><a className='hover:text-black' href="/#comittees">Comittees</a></li>
            <li><Link className='hover:text-black ' to='/about'>About </Link></li>
        </ul>
    </div>
  )
}

export default NavigationBar