import React from 'react'

type Props = {}

export default function Subscribe({}: Props) {
  return (
    <div className='mt-12 py-16 flex flex-col justify-center  items-center bg-slate-900 rounded-2xl text-white'>
        <h1 className='text-4xl font-bold mb-4 w-1/3 text-center'>Subscribe For Get Update Every New Courses</h1>
        <p className='text-gray-600 text-sm mb-8'>20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
        <div className='rounded-xl bg-slate-700'>
            <input type="text" className='outline-0 w-96 border-0 bg-transparent pl-4 ' placeholder='enter your email' />
            <button className='px-8 py-4 rounded-e-xl bg-purple-500'>Subscribe</button>
        </div>
    </div>
  )
}