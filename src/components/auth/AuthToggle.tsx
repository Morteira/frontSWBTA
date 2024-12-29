import { Button } from "@/components/ui/button";

interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}

export function AuthToggle({ isLogin, onToggle }: AuthToggleProps) {
  return (
    <div className="mt-4 text-center">
      <Button
        variant="link"
        onClick={onToggle}
        className="text-sm"
      >
        {isLogin
          ? "¿No tienes cuenta? Regístrate"
          : "¿Ya tienes cuenta? Inicia sesión"}
      </Button>
    </div>
  );
}