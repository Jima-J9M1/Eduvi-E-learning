import React from 'react'
import { commentData } from '../types'

type Props = {
  data: commentData
}

export default function Comment({data}: Props) {
  return (
    <div className='flex flex-row bg-cyan-50 rounded-xl py-12 gap-12 pl-12 pr-8'>
      <div className='relative w-28'>
        <img className='rounded-full border border-gray-100 shadow-sm' src={data.image} alt="user profile" />
      </div>
      <div> 
        <p className='pb-12 font-medium text-2xl'>{data.comment}</p>
        <p>{data.auther}</p>
        <p className='text-xs'>{data.position}</p>
      </div>
    </div>
  )
}