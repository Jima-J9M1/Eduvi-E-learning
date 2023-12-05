import { useEffect } from "react";
import { ListCategories } from "../../Api/courselist-api";
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
  // const {data} = ListCourses()
  const message = localStorage.getItem('message')
  

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('message')
    }, 5000);
  })
  const {data} = ListCategories()
  console.log("this is new data", data)
  return (
    <Wrapper>
      <Nav /> 
      <div className={message ? "flex justify-center p-4 " : "ease-out "}>
      <span className={message ? " bg-yellow-500 text-white p-4 rounded-lg": ""}>
         {message}
      </span>
      </div>
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
