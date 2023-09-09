import Nav from "../Components/Common/Nav";
import SubscriptionBox from "../Components/Common/SubscriptionBox";
import Footer from "../Components/Common/Footer";
import SimilarCourses from "../Components/Course/SimilarCourses";
import CourseDescriptionContainer from "../Components/Course/courseDescriptionContainer";
import AdsCard from "../Components/Course/AdsCard";
import CourseDetail from "../Components/Course/CourseDetail";
import image from "../assets/images/kfc_add.webp";

const CoursePage = () => {
  return (
    <>
      <Nav />
      <div className=" bg-[#f7f5fa] w-auto ">
        <div className=" p-20 grid gap-16 bg-[#f7f5fa]">
          <CourseDescriptionContainer />
          <div className=" grid grid-flow-col w-full ">
            <CourseDetail />
            <AdsCard image={image} adName="add name" />
          </div>
          <SimilarCourses />
          <SubscriptionBox />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CoursePage;
