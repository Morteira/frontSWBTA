import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function Navbar({ toggleSidebar, isSidebarOpen }: NavbarProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleSignOut = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('access_token');
    window.location.reload(); // Recarga la página o redirige al login
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
      setIsProfileMenuOpen(false); // Cierra el menú si se hace clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-page text-white h-16 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center justify-between h-full px-4">
        {/* Sidebar Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-page-hover rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoTLvsTvlLYrxUZe5oeHXx1PYwQP203TngA&s"
              alt="University Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="text-xl font-semibold hidden sm:block">
              Universidad Catolica
            </span>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileMenuRef}>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="h-10 w-10 object-cover rounded-full cursor-pointer"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          />
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg text-gray-800">
              <ul>
                <li>
                  <button
                    onClick={() => alert('Go to Settings')}
                    className="block px-4 py-2 hover:bg-page-hover hover:text-white w-full text-left"
                  >
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert('Go to Account')}
                    className="block px-4 py-2 hover:bg-page-hover hover:text-white w-full text-left"
                  >
                    Account
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 hover:bg-red-100 text-red-600 w-full text-left"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
