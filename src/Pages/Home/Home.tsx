import ApplyCard from "../../Components/Common/Cards/ApplyCard";
import Landing from "../../Components/Common/Cards/Landing";
import TestimonialCarousel from "../../Components/Common/Carousel/TestimonialCarousel";
import CourseList from "../../Components/Common/Courselist";
import Footer from "../../Components/Common/Footer";
import Nav from "../../Components/Common/Nav";
import Quote from "../../Components/Common/Quote";
import SubscriptionBox from "../../Components/Common/SubscriptionBox";
import { Wrapper } from "./Home.styles";


const Home = () => {
  return (
    <Wrapper>
      <Nav />
      <Landing />
      <Quote />
      <CourseList />
      <ApplyCard />
      <TestimonialCarousel />
      <SubscriptionBox />
      <Footer />
    </Wrapper>
  );
};

export default Home;
