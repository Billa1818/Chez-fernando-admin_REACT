import { useState } from 'react';
import { BarChart3, Users, TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'overview',
      label: 'Vue d\'ensemble',
      icon: BarChart3,
      section: 'dashboard'
    },
    {
      id: 'users',
      label: 'Gestion des Utilisateurs',
      icon: Users,
      section: 'users'
    },
    {
      id: 'stats',
      label: 'Statistiques Avancées',
      icon: TrendingUp,
      section: 'stats'
    },
  ];

  return (
    <aside
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className={`px-6 py-6 border-b border-gray-200 flex items-center justify-between`}>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">CF</span>
            </div>
            <span className="font-bold text-gray-800 text-lg">Fernando</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === item.id
                  ? 'bg-orange-100 text-orange-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className={`px-4 py-6 border-t border-gray-200 ${collapsed ? 'text-center' : ''}`}>
        <p className="text-xs text-gray-500 text-center">
          {collapsed ? '© CF' : '© 2024 Chez Fernando'}
        </p>
      </div>
    </aside>
  );
}
