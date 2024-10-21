import HomeIcon from "../../assets/home-icon.svg";
import "./home.scss";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Inputform } from "../../components/custom/inputForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSubmitForm } from "../../hooks/useSubmit"; 
import { SelectForm } from "../../components/custom/selectForm";

type FormData = {
  phone: string;       // Cambia de celular a phone
  document: string;    // Cambia de dni a document
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Inputform
                title="Celular"
                error={errors.phone?.message}  // Cambia celular a phone
                {...register("phone", {        // Cambia celular a phone
                  required: "El número de celular es obligatorio",
                  pattern: {
                    value: /^[0-9]{9}$/, 
                    message: "El número de celular no es válido"
                  }
                })}
              />

              <SelectForm
                title="Nro. de Documento"
                error={errors.document?.message} // Cambia dni a document
                {...register("document", {          // Cambia dni a document
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
