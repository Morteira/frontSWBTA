const SearchBar = () => {
  const search = () => {
    alert('Buscando');
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div className="grid place-items-center gap-4 sm:grid-cols-1 sm:place-items-start sm:justify-items-center">
      <input
        type="text"
        placeholder="Ingrese Algún Tema..."
        className="p-2 w-80 rounded-sm"
        onKeyDown={handleKeyDown} // Detecta cuando se presiona Enter
      />
      <button
        className="p-2 w-28 bg-blue-500 hover:bg-page text-white rounded-sm"
        onClick={search}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
