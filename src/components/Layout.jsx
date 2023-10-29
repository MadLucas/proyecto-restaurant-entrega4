import React from "react"
import Navigate from "../routes/Navigate"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"


const Layout = () => {
    return (
        <div>
            <Navigate />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout