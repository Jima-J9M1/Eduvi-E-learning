import React, { useState } from 'react'
import Comment from '../Comment'
import { commentData } from '../../types'
import profile from '../../assets/pexels-photo-774909.jpeg'
type Props = {}
let comment:commentData[] = [
    {
        comment:'"Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"',
        position:'Vice President',
        auther:'Jenny Wilson',
        image:profile
    }
]
export default function CommentSlid({}: Props) {
    const [count,setCount] = useState<number>(1)
  return (
    <div className='mt-8 flex flex-col'>
        {comment.map((item)=>(
            <Comment data={item} />
        ))}
        <div>
            <span className='w-36 h-36 bg-purple-400 rounded-full'></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}