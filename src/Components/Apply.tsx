import React from 'react'

type Props = {}

export default function Apply({}: Props) {
  return (
    <div className='flex flex-row rounded-2xl bg-green-100 px-4 py-8 mb-12 relative'>
        <h1 className='text-4xl font-bold w-2/3'>Currently internships are available in front-end, back-end, mobile and graphics design. If you are interested, hit the green button now!</h1>
        <button className='px-4 py-2 bg-green-400 rounded-xl font-semibold shadow absolute bottom-4 right-4 text-white'>Apply</button>
    </div>
  )
}