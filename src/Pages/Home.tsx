import { Button } from "@mui/material";
import { useState } from "react";
import AuthModal from "../Components/Modals/AuthModal";

import Nav from "../Components/Common/Nav";
import BreadCrumbs from "../Components/Common/Breadcrumbs";
import Landing from "../Components/Common/Cards/Landing"
import Quote from "../Components/Common/Quote"
import CourseList from "../Components/Common/Courselist";
import Apply from "../Components/Common/Cards/Apply"
import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel"
import SubscriptionBox from "../Components/Common/SubscriptionBox";
import Footer from "../Components/Common/Footer";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Nav />
      <Landing/>
      <Quote/>
      <CourseList/>
      <Apply/>
      <TestimonialCarousel/>
      <SubscriptionBox/>
      <Footer/>
  );
};

export default Home;
