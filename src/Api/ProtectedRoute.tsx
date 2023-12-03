// import { Navigate, Route, redirect } from 'react-router-dom';
// import { UseAuth } from '../Utils/Contexts/AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticate } = UseAuth();

//   return (
//     <Route
//       {...rest}

//       Component={(props) =>
//         isAuthenticate ? <Component {...props} /> : <Navigate to='/' />
//       }
//     />
//   );
// };

// export default ProtectedRoute;