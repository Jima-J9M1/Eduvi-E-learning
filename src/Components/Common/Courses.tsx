import React from 'react'
import { coursePre } from '../../types'
import im1 from '../../assets/pexels-lukas-590016 1.png'
import im2 from '../../assets/pexels-olya-kobruseva-5561923 1.png'
import im3 from '../../assets/unsplash_m_HRfLhgABo.png'
import CoursePreview from '../Course/CoursePreview'
type data = coursePre[]
let predata: data = [
    {
        title:'Dasar Pemrograman WEB ',
        description:'Materi pembelajarn mengenai pembuatan website tingkat pemula',
        videos:20,
        siswa:1.900,
        time:8,
        rating:4.5,
        image:im1
    },
    {
        title:'Digital Marketing 101',
        description:'Materi mengenai strategi dan konsep marketing  pemula',
        videos:32,
        siswa:930,
        time:6.2,
        rating:4.5,
        image:im2
    },
    {
        title:'Data Science Dasar',
        description:'Materi pembelajaran mengenai dasar-dasar data science',
        videos:20,
        siswa:1.043,
        time:8,
        rating:4.5,
        image:im3
    },
] 

type Props = {}

export default function Courses({}: Props) {
  return (
    <div className='grid grid-cols-3 gap-16 pt-16'>
        {predata.map((item)=>(<CoursePreview data={item}/>))}
    </div>
  )
}