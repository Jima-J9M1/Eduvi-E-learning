import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel";
import AdsCard from "../Components/Course/AdsCard";
import vite from '../../public/vite.svg';
import BreadcrumbTest from "../Components/Common/Breadcrumbs";

const Home = () => {
  return (
    <>
    <div className="ml-5">
    <BreadcrumbTest />
    </div>
    <div className="md:p-16 max-md:p-10 flex flex-col justify-center align-center h-screen">
      {/* add other homepage components here */}
      <AdsCard image={vite} adName="Vite Ad" /> {/*move this component to course detail page*/}
      <TestimonialCarousel />
    </div>
    </>
  );
};

export default Home;
