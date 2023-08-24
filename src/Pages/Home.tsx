import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel";
import AdsCard from "../Components/Course/AdsCard";
import vite from '../../public/vite.svg';
import CourseVideoSectionCard from "../Components/Common/Cards/CourseVideoSectionCard";
// import AdsCard from "../Components/Course/AdsCard";

const Home = () => {
  return (
    <div className="md:p-16 max-md:p-10 flex flex-col justify-center align-center h-screen">
      {/* add other homepage components here */}
      <CourseVideoSectionCard image={vite} adName="all" cardName="Maths - for Standard 3 St.." duration="5:30" />
      <div className=" h-32"></div>
      <AdsCard image={vite} adName="Vite Ad" /> {/*move this component to course detail page*/}
      {/* <TestimonialCarousel /> */}

    </div>
  );
};

export default Home;
