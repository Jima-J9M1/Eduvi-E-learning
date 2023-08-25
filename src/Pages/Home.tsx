import AdsCard from "../Components/Course/AdsCard";
import vite from '../../public/vite.svg';
import SimilarCourses from "../Components/Course/SimilarCourses";

const Home = () => {
  return (
    <div className="md:p-16 max-md:p-10 flex flex-col justify-center align-center h-screen bg-gray-100">
      {/* add other homepage components here */}
      <AdsCard image={vite} adName="Vite Ad" /> {/*move this component to course detail page*/}
      <SimilarCourses/>
    </div>
  );
};

export default Home;
