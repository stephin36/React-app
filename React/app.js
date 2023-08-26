import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
//import Groceries from "./src/components/Groceries";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Grocery = lazy(() => import("./src/components/Groceries"));
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const [ userName, setUserName] = useState();
  useEffect(() => {
   const data = {
     name: "Stephin Joseph"
   }
   setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h1>Loading....</h1>}><About /> </Suspense>)
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/groceries",
        element: (<Suspense fallback={<h1>Loading....</h1>}><Grocery /> </Suspense>)
      }
    ],
    errorElement: <Error />
  },
  
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);