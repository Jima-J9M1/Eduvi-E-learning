import {Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error404 from "../Pages/ErrorPages/404";
import CoursePage from "../Pages/CoursePage";
import CoursesDetails from "../Pages/CoursesDetails";
//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Error404 />} />
      <Route path="CoursePage" element={<CoursePage />} />
      <Route path="AllCourses" element={<AllCourses />} />
      <Route path="/:id" element={<CoursesDetails />} />    
    </Route >
  )
);

export default router;
