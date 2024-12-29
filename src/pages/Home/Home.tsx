import React from 'react';
import mainbg from '../../assets/main-bg.jpg';
import CareersGrid from '@/components/Home/CareersGrid';
import SearchBar from '@/components/Search/SearchBar';

interface HomeProps {
  token: string | null;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  if (!token) {
    return null; // No renderiza nada si no hay token
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${mainbg})` }}
    >
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Bienvenido Al Repositorio De La Universidad Catolica
      </h1>

      <SearchBar />

      <h2 className="text-2xl mt-4 text-white text-center mb-8 ">
        Empieza A Explorar Las Tesis Por Carrera.
      </h2>

      {/* Grid de Carreras */}
      <CareersGrid />
    </div>
  );
};

export default Home;
