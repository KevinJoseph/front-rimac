import { useState } from "react";
import axios from "axios";

export const useSubmitForm = (url: string) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const submitForm = async (formData: { celular: string; dni: string }) => {
    setIsSubmitting(true);
    setApiResponse(null);

    try {
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        setApiResponse("Cotización enviada con éxito");
        return true;
      } else {
        setApiResponse(`Error: ${response.data.message || "Hubo un problema"}`);
        return false;
      }
    } catch (error: any) {
      setApiResponse(
        error.response?.data?.message || "Error al enviar los datos, por favor intente de nuevo."
      );
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    apiResponse,
    submitForm
  };
};
