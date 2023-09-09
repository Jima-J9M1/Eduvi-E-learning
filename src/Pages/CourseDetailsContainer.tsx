import React, { useState } from 'react'
import Nav from '../Components/Common/Nav'
import BreadCrumbs from '../Components/Common/BreadCrumbs'
import CourseDetail from '../Components/Course/CourseDetail'
import AdsCard from '../Components/Course/AdsCard'
import SimilarCourses from '../Components/Course/SimilarCourses'
import SubscriptionBox from "../Components/Common/SubscriptionBox"
import Footer from '../Components/Common/Footer'
import { Timestamp } from '../types'
import VideoPlayer from '../Components/Course/VideoPlayer'
// import CourseCard from '../Components/Common/Cards/CourseCard'
// import CourseVideoSectionCard from '../Components/Common/Cards/CourseVideoSectionCard'
// import VideoImg from '../assets/images/Image (1).png'






const CourseDetailsContainer : React.FC = () => {
 
  
  const course = {
    id: 1,
    name: 'Dasar Pemrograman WEB'
  }

  const videoSrc =   "//vjs.zencdn.net/v/oceans.mp4";
  const timestamps: Timestamp[] =[{time:10}, {time:20}, {time:30}]
 

 
  return (
    <div className=''>
      
      <Nav />        
      
      <div className="bg-[#F3E2EF] h-[500] mx-10">
        <BreadCrumbs />
        <div className="flex">
        <VideoPlayer
          src={videoSrc}
          timestamps={timestamps} 

          />
      </div>
       
      
   
         
      </div>
      
      {/* <CourseVideoSectionCard 
           image={VideoImg}  
           adName="Ads"
           cardName="Card Title"  
           duration="2:30"
      /> */}
      
      {/* <CourseCard  
        {...course}
      /> */}


      
       
      <div className="flex justify-center align-middle mx-10 py-5 ">
        <div className="">
          {/* <CourseDetails /> */}
        </div>
        <div className="w-[14rem]  h-64 flex align-middle justify-end bg-[#ffffff] rounded border-hidden ">
          <AdsCard image="path/to/" adName="Ads" />
        </div>
      </div>
      <SimilarCourses />
      <SubscriptionBox />
      <Footer />
      
    </div>
  )
}

export default CourseDetailsContainer
