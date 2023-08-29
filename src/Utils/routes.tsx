import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/ErrorPages/404";
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
    
    </Route >
  )
);

export default router;
