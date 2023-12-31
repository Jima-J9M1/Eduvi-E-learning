import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CoursePage from "../Pages/CourseDetails/CourseDetails";
import NotFoundPage from "../Pages/ErrorPages/404";
import Home from "../Pages/Home/Home";
import ApplicationForm from "../Pages/ApplicantForm/ApplicationForm";
import RequireAuth from "../Components/RequiredAuth";
//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<RequireAuth />}>
      <Route path="/Courses" element={<AllCourses />} />
      <Route path="/courses/:id" element={<CoursePage />} />    
      </Route>
      
      <Route path="/Aboutus" element={<Home />}/>
      <Route path="/Contact" element={<Home />}/>
      <Route path="/application/" element= {<ApplicationForm />} />
    </Route >
  )
);

export default router;
