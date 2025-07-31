import React from 'react'
import { dark500, light300 } from '../constants/themes'


const SectionHeader = (props) => {
  return (
    <article className='flex flex-col text-center items-center justify-center mb-10'>
    <p className={`text-[${light300}] border border-[#E5E5E5] py-1 lg:py-1 px-6 rounded-lg mb-4  `}>{props.sectionName}</p>
    <p className={`text-3xl lg:text-6xl text-[${dark500}]`}>{props.title}</p>
    <p className={`mt-3 text-[${light300}] text-lg lg:text-xl font-light `}>{props.firstLineDesc} <br className='lg:hidden' /> {props.secondLineDesc}</p>
  </article>
  )
}

export default SectionHeader