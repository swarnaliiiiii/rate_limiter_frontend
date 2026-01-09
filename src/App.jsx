import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DecisionOverview from './components/pages/DecisionOverview';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900 flex transition-colors">
        <Sidebar isOpen={sidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col min-w-0">
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          />
          <main className="overflow-y-auto">
            {activeTab === 'overview' && <DecisionOverview />}
            {/* Other pages can be added here */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;