import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { Home } from "../page/home"

export const MainLayout = ({ children } : { children : React.ReactNode}) => {
    return (
        <>
            <Navbar />
            <Home/> 
            <Footer/>
        </>
    )
}