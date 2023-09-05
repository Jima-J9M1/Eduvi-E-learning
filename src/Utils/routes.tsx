import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/ErrorPages/404";
import CoursePage from "../Pages/CoursePage";
import CoursesDetails from "../Pages/CoursesDetails";
import SubscriptionBox from "../Components/Common/SubscriptionBox";
//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>      
    <Route 
        index 
        element={
          <>
            <Home />
          </>
        }
      />
      <Route path="*" element={<Error404 />} />
      <Route path="/program/free" element={''} />
      <Route path="/program/backend" element={''} />
      <Route path="/program/frontend" element={''} />
      <Route path="/privacy" element={''} />
      <Route path="/provision" element={''} />
      <Route path="/provision" element={''} />
      <Route path="CoursePage" element={<CoursePage />} />
      <Route path="/:id" element={<CoursesDetails />} />    
    </Route >
  )
);

export default router;
