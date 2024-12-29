
import { Home, GraduationCap, Users, BookOpen, Phone, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: GraduationCap, label: 'Programs', href: '#' },
    { icon: Users, label: 'Faculty', href: '#' },
    { icon: BookOpen, label: 'Research', href: '#' },
    { icon: Phone, label: 'Contact', href: '#' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-xl z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold text-blue-800">Menu</h2>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          
          <div className="p-4 border-t">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-800"
            >
              <ChevronLeft size={20} />
              <span>Close Menu</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}