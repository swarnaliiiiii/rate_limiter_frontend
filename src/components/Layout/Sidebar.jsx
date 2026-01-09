import React from 'react';
import { Shield, BarChart3, Globe, AlertTriangle, Settings, FileText, Activity } from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Decision Overview', icon: BarChart3 },
  { id: 'ip-analysis', label: 'IP Analysis', icon: Globe },
  { id: 'abuse', label: 'Abuse & Penalty', icon: AlertTriangle },
  { id: 'config', label: 'Config & Control', icon: Settings },
  { id: 'logs', label: 'Decision Logs', icon: FileText },
  { id: 'monitoring', label: 'Monitoring', icon: Activity },
];

const Sidebar = ({ activeTab, setActiveTab, isOpen }) => (
  <aside className={`${isOpen ? 'w-64' : 'w-20'} hidden lg:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300`}>
    <div className="p-6 flex items-center gap-3">
      <div className="bg-purple-600 p-2 rounded-lg shrink-0">
        <Shield className="w-6 h-6 text-white" />
      </div>
      {isOpen && <span className="text-xl font-bold dark:text-white truncate">FraudShield</span>}
    </div>
    <nav className="flex-1 px-4 space-y-2 mt-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeTab === item.id 
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <item.icon className="w-5 h-5 shrink-0" />
          {isOpen && <span className="text-sm font-medium">{item.label}</span>}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;