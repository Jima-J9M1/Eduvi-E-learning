import CourseListed from "../Components/Course/CourseListed"
import Nav from "../Components/Common/Nav"
import SubscriptionBox from "../Components/Common/SubscriptionBox"
import Footer from "../Components/Common/Footer"
import HeaderContainer from "../Components/Common/HeaderContainer"
import image from '../assets/images/Image.svg';
import pattern from '../assets/images/Pattern.svg';
import { ReactNode } from "react"

function AllCourses() {
  const insideHeader = ():ReactNode => {
    return (
      <div className = "flex pl-gap">
        <div className="flex  font-open-sans text-4xl italic font-light leading-10 tracking-normal text-left pt-20 pr-10 pb-10">
        <p className = "text-quote-title-color" >Courses <br />For All Standards</p>
        </div>
        <div className = "m-5 ml-20">
        <div className=" relative flex">
          <img src={pattern} className="absolute inset-0 z-0" alt="Pattern" />
          <img src={image} className="relative z-10" alt="Image" />
        </div>
        </div>
</div>)
    
  }
  return (
    <div>
        <Nav />        
        <div className = "m-catb-pos">
        <HeaderContainer children ={insideHeader()}/>
        <CourseListed />
        </div>
        <SubscriptionBox />
        <Footer />
    </div>
  )
}

export default AllCourses
