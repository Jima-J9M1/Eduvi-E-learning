import React from 'react'
import Purplebtn from '../Botton/Purplebtn'
import BoldTitle from '../Common/BoldTitle'

type Props = {}

export default function Qulified({}: Props) {
  return (
    <div className='flex flex-col items-center pt-32 pb-16 border-2 border-b-gray-300'>
      <div  className='flex flex-col items-center w-3/5'>
        <BoldTitle text='Qualified lessons for students'/>
        <p className='text-center text-gray-600 pt-6 px-24'>A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.</p>
      </div>
      <div className='flex justify-end w-full mt-5'>
        <Purplebtn size={4} text='View more Courses'/>
      </div>
    </div>
  )
}