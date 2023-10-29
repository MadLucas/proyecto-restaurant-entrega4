import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import Reservas from "../views/Reservas";
import Menu from "../views/Menu";
import Login from "../views/Login";
import Admin from "../views/Admin";
import Bebestibles from "../views/Bebestibles";
import Home from "../views/Home"
import Nosotros from "../views/Nosotros";

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Reservas" element={<Reservas/>} />
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Admin" element={<Admin/>}/>
                <Route path="/Bebestibles" element={<Bebestibles/>}/>
                <Route path="/Nosotros" element={<Nosotros/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes;