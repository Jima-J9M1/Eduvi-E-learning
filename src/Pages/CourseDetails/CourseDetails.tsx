/* eslint-disable react-hooks/rules-of-hooks */
import { Wrapper } from "./CourseDetails.styles";
import Nav from "../../Components/Common/Nav";
import { Grid } from "@mui/material";
import ReactPlayer from 'react-player';
import HeaderContainer from "../../Components/BreadCrumbs/HeaderContainer";
import SimilarCourses from "../../Components/Course/SimilarCourses";
import SubscriptionBox from "../../Components/Common/SubscriptionBox";
import Footer from "../../Components/Common/Footer";
import CourseDetail from "../../Components/Course/CourseDetail";
import AdsCard from "../../Components/Course/AdsCard";
import image from "../../assets/images/Image (4).png";
import {  Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../styles/global.css'
import { getCurrentCourse, isAuthenticated, returnTokenData, setCurrentCourse } from "../../Api/authenticate";
import { useBuyCourseMutation } from "../../Api/user-api";
import { CourseDetailData } from "../../Api/courselist-api";
import CourseVideoSectionCard from "../../Components/Common/Cards/CourseVideoSectionCard";
import InternButton from "../../Components/Buttons/InternButton";
// import { CourseCardProps } from "../../types";
// import { CourseCardProps } from "../../types";

const CourseDetailPage = () => {
  const { state } = useLocation();
  const [disable] = useState<boolean>(false);
  // const [data, setData] = useState<CourseCardProps>()
  const [error, setError] = useState<string>('')
  const val = getCurrentCourse()
  const courseData = state?.data ||  val
  const [video, setVideo] = useState(courseData.introduction_video)
  
  console.log(video)
  const buyCourseMutation = useBuyCourseMutation()
  const { data} = CourseDetailData(courseData.id)

  console.log(data)

  const handleSubmit = async () => {
       if(isAuthenticated()){
        const U_Id = String(returnTokenData())
        const purchaseData = 
        {
          studentId:U_Id,
          courseId:String(courseData.id),
          portfolio:"https://example.com/portfolio"
        }
        

        const response = await buyCourseMutation.mutateAsync(purchaseData)
        if(response.error){
          setError(response.error)
        }
        


        await setCurrentCourse(data)
        window.location.replace(response.paymentUrl);
        // return <Navigate to={response.paymentUrl} />
       }else{
        alert("UnAhuthorized User")
       }

  }

  useEffect(()=>{
    setTimeout(() => {
      setError('')
    }, 5000);
  }, [error])
  return (
    data && <Wrapper>
      <Nav />
      <div className="flex justify-center mt-3">
      <span className={error ? "bg-red-500 p-3 rounded-lg text-white": ''}>{error}</span>
      </div>
      <HeaderContainer>
        <Grid container className="m-0">
          <Grid sm={12} lg={8} className="mt-4 w-[100%] mb-5" alignItems="flex-end">
            <ReactPlayer
              className="rounded-xl object-cover"
              width='100%'
              height='90%'
              url={video}
            />
          </Grid>
          <Grid sm={12} lg={3} justifyContent="center" className="justify-center align-center">
            <p className="ml-5 p-0 font-sans text-base italic font-light leading-8 tracking-normal text-left text-indigo-900">
              Course Playlists
            </p>
            
            
            <div className="grid gap-5 pl-8  h-[400px] overflow-y-scroll overflow-x-hidden">
      
         <div className="grid gap-2 ">
          {
            data &&  data.videos.map((video:{name:string, video_id:number, url:string}) =>(
               <NavLink
               to={`/courses/${video.name}`} state={{ data: data }}
               onClick={()=>setVideo(video.url)}
              className={disable ? "pointer-events-none opacity-[0.4]": ({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-blue-200 rounded-lg" : ""
            }
                // className={disable ? "pointer-events-none opacity-[0.4]": ""}
                aria-disabled>
                <CourseVideoSectionCard
                  image={data.img}
                  adName={video.name}
                  cardName={video.name}
                />

              </NavLink>
            ))
          }
      </div>
    </div>


          </Grid>
          <h2 className="text-lg text-blue-400">Maths for Standard 3 student | Episode 3 </h2>
        </Grid>

      </HeaderContainer>

      <Grid container gap={3} className=" w-1/2" width="1/3">
        <Grid xs={12} lg={8} >
          <CourseDetail
            target_audience={data.target_audience}
            name={data.name}
            description={data.description}
          />


        </Grid>
        <Grid xs={12} lg={3} className="w-[100%]">
          <AdsCard image={image} adName="adds" />
        </Grid>
      </Grid>
      
      { disable && <div className="flex items-center gap-7 ml-6 mb-8">
        <div className="">
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmit()}>Pay Now</button>
          </div>
         <p className="text-3xl font-bold ">
         <Link
            to="/application"
           ><InternButton text="Apply to internship" />
           </Link>
      </p>
      </div>}
      <SimilarCourses />
      <SubscriptionBox />
      <Footer />
    </Wrapper>

  )
}

export default CourseDetailPage;
