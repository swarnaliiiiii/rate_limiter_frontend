import React from 'react';
import { Menu, Search, Moon, Sun, Bell, Upload, Download } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, toggleSidebar }) => {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 transition-colors">
      
      {/* Left Section: Menu & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search clients, sessions..." 
            className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white placeholder-gray-400 transition-all"
          />
        </div>
      </div>

      {/* Right Section: Actions & Theme */}
      <div className="flex items-center gap-2 lg:gap-4">
        
        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </button>

        {/* Action Buttons from Notes */}
        <div className="flex items-center gap-2 ml-2 pl-4 border-l border-gray-200 dark:border-gray-700">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Upload className="w-3.5 h-3.5" />
            APPLY CONFIGS
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg text-xs font-bold hover:bg-purple-700 shadow-sm shadow-purple-200 dark:shadow-none transition-colors">
            <Download className="w-3.5 h-3.5" />
            TRACE EXPORT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;