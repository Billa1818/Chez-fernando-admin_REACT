import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import UsersList from '../components/UsersList';
import AdvancedStats from '../components/AdvancedStats';
import { Package, DollarSign, Users, Star, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar user={user} />

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            
            {/* VUE D'ENSEMBLE */}
            {activeTab === 'overview' && (
              <div>
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Vue d'ensemble
                  </h1>
                  <p className="text-gray-600">
                    Statistiques en temps réel et alertes système
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <StatCard
                    title="Commandes du jour"
                    value="48"
                    change="+12%"
                    icon={Package}
                  />
                  <StatCard
                    title="Chiffre d'affaires"
                    value="2,450€"
                    change="+8%"
                    icon={DollarSign}
                  />
                  <StatCard
                    title="Utilisateurs actifs"
                    value="156"
                    change="+5%"
                    icon={Users}
                  />
                  <StatCard
                    title="Satisfaction client"
                    value="4.8/5"
                    change="+2%"
                    icon={Star}
                  />
                </div>

                {/* Charts & Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Graphique de performance
                    </h2>
                    <div className="h-80 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                      <p className="text-gray-500">Graphique Chart.js intégré ici</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Alertes système
                    </h2>
                    <div className="space-y-3">
                      <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-red-800">Serveur charge élevée</p>
                            <p className="text-sm text-red-700">CPU à 87%</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-yellow-800">Mémoire faible</p>
                            <p className="text-sm text-yellow-700">RAM à 72%</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-green-800">Tous les livreurs actifs</p>
                            <p className="text-sm text-green-700">45 livreurs en ligne</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GESTION DES UTILISATEURS */}
            {activeTab === 'users' && (
              <UsersList />
            )}

            {/* STATISTIQUES AVANCÉES */}
            {activeTab === 'stats' && (
              <AdvancedStats />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
