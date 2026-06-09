import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";
import Founders from "./Founders";
import AboutUs from "./AboutUs";
import Services from "./Services";



export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "", element: <Home {...props} /> },
        { path: "/menu", element: <Menu {...props} /> },
        { path: "/about-us", element: <AboutUs {...props} /> },
        { path: "/founders-desk", element: <Founders {...props} /> },
        { path: "/services", element: <Services {...props} /> },
 
        
        Outlet,
    ]);
    return <div className="">{routes}</div>;
}
