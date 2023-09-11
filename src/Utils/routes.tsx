import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CoursePage from "../Pages/CourseDetails/CourseDetails";
import NotFoundPage from "../Pages/ErrorPages/404";
import Home from "../Pages/Home/Home";
//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Courses" element={<AllCourses />} />
      <Route path="/Course/:id" element={<CoursePage />} />    
       <Route path="/Aboutus" element={<Home />}/>
       <Route path="/Contact" element={<Home />}/>
    </Route >
  )
);

export default router;
