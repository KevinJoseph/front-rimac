import "./footer.scss"

export const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="container footer__container-contend">
                <img src="/images/Logo-secondary.svg" alt="logo" height={42} width={85} className="footer__contend-image1" />
                <img src="/images/Logo-secondary2.svg" alt="logo" height="100%" width={180} className="footer__contend-image2" />
                <div className="footer__contend-line"></div>
                <p>© 2023 RIMAC Seguros y Reaseguros</p>
            </div>
        </footer>
    )
}