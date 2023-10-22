import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Reservas from "../views/Reservas";
import Menu from "../views/Menu";

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reservas/>} />
                <Route path="/Menu" element={<Menu/>} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes;