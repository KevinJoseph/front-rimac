import HomeIcon from "../../assets/home-icon.svg"
import "./home.scss"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Inputform } from "../../components/custom/inputForm"

export const Home = () => {
    return (
        <div className="home__container">
            <div className="container_home">
                <img src={HomeIcon} alt="home-icon" />
                <div>
                    <div className="home__contend">
                        <Badge>Seguro Salud Flexible</Badge>
                        <h2 className="home___contend-title">Creado para ti y tu familia</h2>
                        <p className="home___contend-text">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                        <Inputform
                            title="Celular"
                            placeholder="Ingresa tu número"
                        />
                        <a href="#" className="home__contend-link">Aplican Términos y Condiciones.</a>
                    </div>
                    <Button>
                        Cotiza Aqui
                    </Button>
                </div>
            </div>
        </div>
    )
}
