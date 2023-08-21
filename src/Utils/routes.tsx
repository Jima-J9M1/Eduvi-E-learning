import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/ErrorPages/404";
import CourseDetail from "../Components/Course/CourseDetail";
import AllCourses from "../Pages/AllCourses";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Layout from "../Components/Common/Layout";

//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="coursedetail" element={<CourseDetail/>}/>
        <Route path="allcourse" element={<AllCourses/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default router;
