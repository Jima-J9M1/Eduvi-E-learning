import React from 'react'

type Props = {
    text:string
}

export default function BoldTitle({text}: Props) {
  return (
    <div><h1 className='font-bold text-5xl'>{text}</h1></div>
  )
}