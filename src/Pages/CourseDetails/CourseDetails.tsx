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
import {  Link, NavLink, useLocation} from "react-router-dom";
import { useEffect, useState,useMemo } from "react";
import '../../styles/global.css'
import { getCurrentCourse, returnTokenData } from "../../Api/authenticate";
import { courseAccess, useBuyCourseMutation } from "../../Api/user-api";
import { CourseDetailData } from "../../Api/courselist-api";
import CourseVideoSectionCard from "../../Components/Common/Cards/CourseVideoSectionCard";
import InternButton from "../../Components/Buttons/InternButton";
import useAuth from "../../hooks/useAuth";


const CourseDetailPage =  () => {
  
  const getId = String(returnTokenData())
  
  
  
  const { state } = useLocation();
  const [disable,setDisable] = useState<boolean>(true);
  const [panding,setPanding]=useState<boolean>(false)
  const courseAccessDatas = {
    studentId: parseInt(getId),
    courseId: state?.data.id
  }
  useEffect( () =>{
      courseAccess(courseAccessDatas).then(
        (res) => {
        if(res.courseAccess!==0){
             if(res.courseAccess===1){
                  setDisable(false)
             }else {
                setPanding(true)
                   }
        }  
        }
      ).catch(err => console.log(err))
  }, [])

 useMemo(()=>{
   if(state?.data){
    const data=JSON.stringify(state?.data)
    localStorage.setItem("coures",data)
   }
 },[])
  
  const {auth} = useAuth()
  const [error, setError] = useState<string>('')
  const val = getCurrentCourse()
  const cou=localStorage.getItem("coures")
  const courseData =JSON.parse(cou) ||  val
  const [video, setVideo] = useState(courseData.introduction_video)
  
  const buyCourseMutation = useBuyCourseMutation()
  const { data} = CourseDetailData(courseData.id)


  const handleSubmit = async () => {
    
    if(auth){

        const purchaseData = 
        {
          studentId:getId,
          courseId:String(courseData.id),
          portfolio:"https://example.com/portfolio"
        }
        

        const response = await buyCourseMutation.mutateAsync(purchaseData)
        if(response.error){
          setError(response.error)
          console.log(purchaseData)
        }else{
          
          console.log(response)
          // authenticate(auth)
          window.location.replace(response.paymentUrl);
        }
        


        
       }else{
        alert("UnAhuthorized User")
       }

  }

  useEffect(()=>{
    setTimeout(() => {
      setError('')
    }, 10000);
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
              height='400px'
              url={video}
            />
          </Grid>
          <Grid sm={12} lg={3} justifyContent="center" className="justify-center align-center">
            <p className="ml-5 p-0 font-sans text-base italic font-light leading-8 tracking-normal text-left text-indigo-900">
              Course Playlists
            </p>
            
            
      
         <div className="flex flex-col gap-3 border  w-[300px] md:w-full ml-5 mt-4 p-2">
          {
            data &&  data.videos.map((video:{name:string, video_id:number, url:string}) =>(
               <NavLink
               to={`/courses/${video.name}`} state={{ data: data }}
               onClick={()=>setVideo(video.url)}
              className={disable ? "pointer-events-none opacity-[0.4] h-auto": ({ isActive, isPending }) =>
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


          </Grid>
          <h2 className="text-lg text-blue-400">{data.name}  </h2>
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
       
         <p className="text-3xl font-bold ">
          {panding?(<p className=" font-bold  text-2xl items-center text-pink-600  border-2 border-pink-600 
          py-4 p-2 rounded-lg  w-80 md:w-full ml-3   ">you are already applay for this course !</p>):(
        <div className=" md:flex gap-3 items-center">
        <button className="bg-green-500 hover:bg-blue-700 text-white mb-2 md:mb-0 font-bold py-2 px-4 rounded" onClick={() => handleSubmit()}>Pay Now</button>
         <Link
            to="/application"
            state={{data:courseData}}
           ><InternButton text="Apply to internship" />
           </Link>
           </div>
           )}
      </p>
      </div>}
      <SimilarCourses />
      <SubscriptionBox />
      <Footer />
    </Wrapper>

  )
}

export default CourseDetailPage;
