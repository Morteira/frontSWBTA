import { Navbar } from '@/components/NavBar';
import { Sidebar } from '@/components/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-boxdark-2 dark:text-bodydark">
      {/* Page Wrapper */}
      <div className="flex h-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Content Area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden h-full">
          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          {/* Main Content */}
          <main
            className={`pt-16 transition-[padding] duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-0'}`}
          >
            <div className="">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
