import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// // receives component and any other props represented by ...rest
// export default function ProtectedRoute({ component: Component, ...rest }) {
//     return (

//         // this route takes other route assigned to it from the App.js and return the same route if condition is met
//         <Route
//             {...rest}
//             render={(props) => {
//                 // get cookie from browser if logged in
//                 const token = cookies.get("TOKEN");

//                 // return route if there is a valid token set in the cookie
//                 if (token) {
//                     return <Component {...props} />;
//                 } else {
//                     // return the user to the landing page if there is no valid token set
//                     return (
//                         <Navigate
//                             to={{
//                                 pathname: "/",
//                                 state: {
//                                     // sets the location a user was about to assess before being redirected to login
//                                     from: props.location,
//                                 },
//                             }}
//                         />
//                     );
//                 }
//             }}
//         />
//     );
// }



const ProtectedRoute = ({ children }) => {
    // get cookie from browser if logged in
    const token = cookies.get("TOKEN");

    // const user = useSelector((state) => state.user);
    let location = useLocation();

    if (token) {
        return children
    }
    else {
        return <Navigate to="/" state={{ from: location }} replace />
    }

};

export default ProtectedRoute;