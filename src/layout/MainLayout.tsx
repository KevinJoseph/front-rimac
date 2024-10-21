import { Navbar } from "./navbar"
import { Footer } from "./footer"

export const MainLayout = ({ children } : { children : React.ReactNode}) => {
    return (
        <>
            <Navbar />
            <p>Home</p>
            <Footer/>
        </>
    )
}