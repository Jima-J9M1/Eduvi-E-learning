import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel";
import AdsCard from "../Components/Course/AdsCard";
import vite from '../../public/vite.svg';

const Home = () => {
  return (
    <div className="p-16 flex flex-col justify-center align-center h-screen">
      {/* add other homepage components here */}
      <AdsCard image={vite} adName="Vite Ad" /> {/*move this component to course detail page*/}
      <TestimonialCarousel />
    </div>
  );
};

export default Home;
