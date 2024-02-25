import Courses from "../Components/Common/Courses";
import Middle from "../Components/Home/Middle";
import Qulified from "../Components/Home/Qulified";
import Subscribe from "../Components/Home/Subscribe";
import Welcome from "../Components/Home/Welcome";

const Home = () => {
  return (
    <>
     <Welcome />
     <Qulified />
     <Courses />
     <Middle />
     <Subscribe />
    </>
  );
};

export default Home;
