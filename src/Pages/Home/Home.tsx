import { Grid } from "@mui/material";
import { Wrapper } from "./Home.styles";
import Landing from "../../Components/Common/Cards/Landing";
import Nav from "../../Components/Common/Nav";
import Quote from "../../Components/Common/Quote";
import CourseList from "../../Components/Common/Courselist";
import ApplyCard from "../../Components/Common/Cards/ApplyCard";
import TestimonialCarousel from "../../Components/Common/Carousel/TestimonialCarousel";
import SubscriptionBox from "../../Components/Common/SubscriptionBox";
import Footer from "../../Components/Common/Footer";
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
