import HomeIcon from "../../assets/home-icon.svg";
import "./home.scss";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Inputform } from "../../components/custom/inputForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSubmitForm } from "../../hooks/useSubmit"; 

type FormData = {
  celular: string;
  dni: string;
};

export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const { isSubmitting, apiResponse, submitForm } = useSubmitForm("https://localhost");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("data: ", data)
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Inputform
                title="Celular"
                error={errors.celular?.message}
                {...register("celular", {
                  required: "El número de celular es obligatorio",
                  pattern: {
                    value: /^[0-9]{9}$/, 
                    message: "El número de celular no es válido"
                  }
                })}
              />

              <Inputform
                title="DNI"
                error={errors.dni?.message}
                {...register("dni", {
                  required: "El DNI es obligatorio",
                  pattern: {
                    value: /^[0-9]{8}$/, 
                    message: "El DNI no es válido"
                  }
                })}
              />

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
