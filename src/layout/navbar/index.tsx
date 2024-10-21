import { FaPhone } from "react-icons/fa6"
import "./navbar.scss"

export const Navbar = () => {
    return (
        <nav className="container">
            <div className="nav__container">
                <img src="/images/Logo.svg" alt="logo" width={73} height={36} />
                <div className="nav__content">
                    <h4 className="nav__content-compra">¡Compra por este medio!</h4>
                    <div className="nav__content-info">
                        <FaPhone style={{ width: 20, height: 20 }} />
                        <p>(01) 411 6001</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}