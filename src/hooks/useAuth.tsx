import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const token: string | null = useSelector((state: any) => state.auth.token);
  const tokenLocal = localStorage.getItem('access_token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenLocal) {
      navigate('/auth/signin-signup');
    }
  }, [token, navigate]);

  return token || tokenLocal;
};

export default useAuth;