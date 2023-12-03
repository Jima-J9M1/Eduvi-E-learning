/* eslint-disable react-hooks/rules-of-hooks */
import { Wrapper } from "./CourseDetails.styles";
import Nav from "../../Components/Common/Nav";
import { Grid } from "@mui/material";
import ReactPlayer from 'react-player';
import CoursePlaylists from "../../Components/Common/coursePlaylists";
import HeaderContainer from "../../Components/BreadCrumbs/HeaderContainer";
import SimilarCourses from "../../Components/Course/SimilarCourses";
import SubscriptionBox from "../../Components/Common/SubscriptionBox";
import Footer from "../../Components/Common/Footer";
import CourseDetail from "../../Components/Course/CourseDetail";
import AdsCard from "../../Components/Course/AdsCard";
import image from "../../assets/images/Image (4).png";
import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../../styles/global.css'
import { isAuthenticated, returnTokenData } from "../../Api/authenticate";
import { useBuyCourseMutation } from "../../Api/user-api";

const CourseDetailPage = () => {
  const { state } = useLocation();
  const [disable] = useState<boolean>(true)
  const navigate = useNavigate();
  const data = state.data
  console.log(data)
  const buyCourseMutation = useBuyCourseMutation()

  const handleSubmit = async () => {
       if(isAuthenticated()){
        const U_Id = String(returnTokenData())
        console.log("user id", U_Id)
        const purchaseData = 
        {
          studentId:U_Id,
          courseId:data.id,
          portfolio:"https://example.com/portfolio"
        }
        
        console.log(purchaseData)

        const response = await buyCourseMutation.mutateAsync(purchaseData)
        console.log("response values" ,response.paymentUrl)
        
        console.log("type", typeof(response.paymentUrl))
        // navigate('../courses',{replace:true})
        window.location.replace(response.paymentUrl);
        // return <Navigate to={response.paymentUrl} />
       }else{
        alert("UnAhuthorized User")
       }

  }
  return (
    <Wrapper>
      <Nav />
      <HeaderContainer>
        <Grid container className="">
          <Grid sm={12} lg={8} className=" w-[100%] mb-5" alignItems="flex-end">
            <ReactPlayer
              className="rounded-xl object-cover"
              width='100%'
              height='90%'
              url="https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK"
            />
          </Grid>
          <Grid sm={12} lg={3} justifyContent="center" className="justify-center align-center">
            <p className="m-0 p-0 font-sans text-base italic font-light leading-8 tracking-normal text-left text-indigo-900">
              Course Playlists
            </p>
            <CoursePlaylists disable={disable} />
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

          <div className="m-6">
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmit()}>Pay Now</button>
          </div>
        </Grid>
        <Grid xs={12} lg={3} className="w-[100%]">
          <AdsCard image={image} adName="adds" />
        </Grid>
      </Grid>
      <SimilarCourses />
      <SubscriptionBox />
      <Footer />
    </Wrapper>

  )
}

export default CourseDetailPage;
