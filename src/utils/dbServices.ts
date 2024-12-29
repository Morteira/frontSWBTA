// Define la URL base de tu API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export async function login({
  documento,
  matricula,
  password,
}: {
  documento?: string;
  matricula?: string;
  password: string;
}) {
  const response = await fetch(API_BASE_URL+'/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      documento: documento || undefined,
      matricula: matricula || undefined,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Error en las credenciales");
  }

  return await response.json();
}


export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  documento: string;
  matricula: string;
}) => {
  try {
    const response = await fetch(API_BASE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      // Extrae el mensaje de error y lo lanza
      throw new Error(errorData.message || "Error al registrar el usuario");
    }
  } catch (error: any) {
    // En caso de error, extraemos el mensaje del error
    throw new Error(error.message || "Error en la conexión con el servidor");
  }
};

