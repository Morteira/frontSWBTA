import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { registerUser } from "../../utils/dbServices"; // Importa la función
import { RegisterFormState } from "@/common/interfaces/db.interface";

// Interfaz para el estado del formulario de registro


export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<RegisterFormState>({
    name: "",
    email: "",
    password: "",
    documento: "",
    matricula: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, documento, matricula } = formData;

    // Validar que todos los campos estén completos
    if (!name || !email || !password || (!documento && !matricula)) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    try {
      // Llamada a la función para registrar al usuario desde dbServices
      const data = await registerUser({
        name,
        email,
        password, 
        documento,
        matricula,
      });

      toast.success("Registro exitoso");
      // Redirigir al usuario o limpiar el formulario, etc.
    } catch (error: any) {
      // Muestra el mensaje de error proveniente del backend
      toast.error(error.message || "Error al registrar el usuario");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Juan Pérez"
          className="auth-input bg-white/50"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-email">Correo electrónico</Label>
        <Input
          id="register-email"
          name="email"
          type="email"
          placeholder="usuario@ejemplo.com"
          className="auth-input bg-white/50"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-password">Contraseña</Label>
        <div className="relative">
          <Input
            id="register-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="auth-input bg-white/50"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="documento">Documento</Label>
        <Input
          id="documento"
          name="documento"
          type="text"
          placeholder="Ingresa tu documento"
          className="auth-input bg-white/50"
          value={formData.documento}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="matricula">Matrícula</Label>
        <Input
          id="matricula"
          name="matricula"
          type="text"
          placeholder="Ingresa tu matrícula"
          className="auth-input bg-white/50"
          value={formData.matricula}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full auth-button bg-primary hover:bg-primary/90">
        Registrarse
      </Button>
    </form>
  );
}
