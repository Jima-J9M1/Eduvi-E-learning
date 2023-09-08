import * as React from 'react'
import {render} from 'react-dom'
import CustomVideoPlayer from '../Components/Course/CustomVideoPlayer'
import Nav from '../Components/Common/Nav'
import BreadCrumbs from '../Components/Common/BreadCrumbs'
import CourseDetail from '../Components/Course/CourseDetail'
import AdsCard from '../Components/Course/AdsCard'
import SimilarCourses from '../Components/Course/SimilarCourses'
import SubscriptionBox from "../Components/Common/SubscriptionBox"
import Footer from '../Components/Common/Footer'


const CourseDetailsContainer : React.FC = () => {
 
  
 
  const videoJsOptions = {
  
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],

    }
  
 
  return (
    <div className=''>
      
      
      <Nav /> 

      
      <div className="bg-[#F3E2EF] h-96 mx-10">
        <BreadCrumbs />
       
        {/* <CustomVideoPlayer options={videoJsOptions}/>  */}
       
       
       
      </div> 
      
     
   
      <div className="flex justify-center align-middle mx-10 py-5 ">
        <div className="w-3/4">
           <CourseDetail /> 
        </div>
        <div className="w-1/4 w-[16rem]  h-64 flex align-middle justify-end bg-[#f5f5f5] rounded border-hidden ">
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
         
      


      
       





