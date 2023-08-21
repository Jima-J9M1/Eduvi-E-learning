import React from 'react'

type Props = {
    text:string,
    size?:number
}

export default function Purplebtn({text,size=2}: Props) {
  return (
    <div>
        <button className={` text-white bg-purple-600 px-${size} py-3 rounded-lg`}>{text}</button>
    </div>
  )
}