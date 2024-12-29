import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { login } from "../../utils/dbServices";
import { dataLogin } from "../../common/interfaces/db.interface";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { useDispatch } from "react-redux"; // Importar useDispatch
import { setToken } from "../../redux/tokenSlice"; // Importar la acción setToken

export function LoginForm() {
  const [credentials, setCredentials] = useState<dataLogin>({
    identifier: "", // Unificado para documento o matrícula
    password: "",
  });

  const navigate = useNavigate(); // Inicializar navigate
  const dispatch = useDispatch(); // Inicializar dispatch

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { identifier, password } = credentials;

    // Validar que al menos el identificador y la contraseña estén presentes
    if (!identifier || !password) {
      toast.error("Por favor, ingresa tu documento o matrícula y la contraseña.");
      return;
    }

    try {
      const response = await login({
        documento: isNaN(Number(identifier)) ? undefined : identifier, // Si es número, se asume como documento
        matricula: isNaN(Number(identifier)) ? identifier : undefined, // Si no es número, se asume como matrícula
        password,
      });

      // Guardar el token en localStorage
      localStorage.setItem("access_token", response.access_token);
      
      // Guardar el token en el estado de Redux
      dispatch(setToken(response.access_token));

      // Mostrar el mensaje de éxito
      toast.success("Inicio de sesión exitoso");

      // Redirigir al usuario al Home
      navigate("/");

    } catch (error) {
      toast.error("Credenciales inválidas");
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="identifier">Documento o Matrícula</Label>
        <Input
          id="identifier"
          name="identifier"
          type="text"
          placeholder="Ingresa tu documento o matrícula"
          className="auth-input bg-white/50"
          value={credentials.identifier}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="auth-input bg-white/50"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full auth-button bg-primary hover:bg-primary/90">
        Iniciar sesión
      </Button>
    </form>
  );
}
