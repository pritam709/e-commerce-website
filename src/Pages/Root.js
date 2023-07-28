import { Outlet } from "react-router-dom"
import NavbarFn from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
const Root=()=>{
    return <>
         <NavbarFn />
         <Header/>
        <Outlet/>
        <Footer/>
        </>
}
export default Root;