import * as React from 'react'
import Nav from '../Components/Common/Nav'
import BreadCrumbs from '../Components/Common/BreadCrumbs'
import CourseDetail from '../Components/Course/CourseDetail'
import AdsCard from '../Components/Course/AdsCard'
import SimilarCourses from '../Components/Course/SimilarCourses'
import SubscriptionBox from "../Components/Common/SubscriptionBox"
import Footer from '../Components/Common/Footer'
import Container from '@mui/material/Container';
import ReactPlayer from 'react-player'



const CourseDetailsContainer : React.FC = () => {
  
  return (
    <div className=''>
      <Nav /> 
      
      <div className="bg-[#F3E2EF] h-[26rem] rounded-xl mx-10">
        <BreadCrumbs />
        <Container maxWidth='xl' >
        <div  style={{ borderRadius: '10px' }} >
          <ReactPlayer  url='https://www.youtube.com/watch?v=xbs7FT7dXYc'  />
        </div>
        </Container>
      </div>
   
      <div className="flex justify-center align-middle mx-10 py-5 ">
        {/* <div className="w-3/4"> */}
           <CourseDetail /> 
        {/* </div> */}
        <div className=" w-[32rem]  h-80 flex align-middle justify-end bg-[#f5f5f5] rounded-lg border-hidden ">
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
            
     
         
           
            
         
         
        
       
       
       
       
      
      


      
       





