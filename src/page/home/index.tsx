import HomeIcon from "../../assets/home-icon.svg";
import "./home.scss";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Inputform } from "../../components/custom/inputForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSubmitForm } from "../../hooks/useSubmit";
import { FaCheckSquare } from "react-icons/fa";

type FormData = {
  phone: string; 
  document: string; 
};

export const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const { isSubmitting, apiResponse, submitForm } = useSubmitForm(apiUrl);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("data: ", data);
    const success = await submitForm(data);
    if (success) {
      reset();
    }
  };

  return (
    <div className="home__container">
      <div className="container_home">
        <img src={HomeIcon} alt="home-icon" />
        <div>
          <div className="home__contend">
            <Badge>Seguro Salud Flexible</Badge>
            <h2 className="home___contend-title">Creado para ti y tu familia</h2>
            <p className="home___contend-text">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", width: "100%", gap: "10px" }}>
              <div className="inputSelect">
                <div className="inputSelect--select ">
                  <select id="documentType" name="documentType">
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </select>

                </div>
                <div className="input-div">
                  <label
                    htmlFor="UserEmail"
                    className="input-container"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder=""
                      className="input-field"
                    />

                    <span className="input-label">
                      Email
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="userPhone"
                  className="input-container2"
                >
                  <input
                    type="number"
                    id="userPhone"
                    placeholder=""
                    className="input-field"
                    {...register("phone", {       
                      required: "El número de celular es obligatorio",
                      pattern: {
                        value: /^[0-9]{9}$/,
                        message: "El número de celular no es válido"
                      }
                    })}
                  />

                  <span className="input-label">
                    Telefono
                  </span>
                </label>
              </div>

              <div className="home__contend-politicy">
                <p><FaCheckSquare /> Acepto la política de privacidad</p>
                <p><FaCheckSquare /> Acepto la Política Comunicaciones Comerciales</p>
              </div>

              <a href="#" className="home__contend-link">
                Aplican Términos y Condiciones.
              </a>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Cotiza Aqui"}
              </Button>
            </form>

            {apiResponse && <p className="api-response">{apiResponse}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};