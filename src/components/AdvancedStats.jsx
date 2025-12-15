import { useState } from 'react';
import { Calendar, Download, TrendingUp, DollarSign, Heart, AlertCircle } from 'lucide-react';

export default function AdvancedStats() {
  const [dateFilter, setDateFilter] = useState('month');
  const [showReport, setShowReport] = useState(false);

  const stats = {
    week: {
      commandes: 340,
      revenus: 12450,
      satisfaction: 4.7,
      plaintes: 3
    },
    month: {
      commandes: 1240,
      revenus: 45800,
      satisfaction: 4.8,
      plaintes: 12
    },
    year: {
      commandes: 15680,
      revenus: 580000,
      satisfaction: 4.6,
      plaintes: 145
    }
  };

  const currentStats = stats[dateFilter];

  const complaintsList = [
    {
      id: 1,
      client: 'Dupont Jean',
      type: 'Livraison tardive',
      date: '2024-12-05',
      status: 'En cours',
      description: 'Livraison reçue 30 minutes en retard'
    },
    {
      id: 2,
      client: 'Martin Sophie',
      type: 'Commande incorrecte',
      date: '2024-12-04',
      status: 'Résolu',
      description: 'Article manquant dans la commande'
    },
    {
      id: 3,
      client: 'Bernard Michel',
      type: 'Qualité du service',
      date: '2024-12-03',
      status: 'En attente',
      description: 'Le livreur n\'a pas sonné à la porte'
    },
    {
      id: 4,
      client: 'Leclerc Antoine',
      type: 'Dommages au colis',
      date: '2024-12-02',
      status: 'Résolu',
      description: 'Emballage endommagé à la réception'
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Statistiques Avancées
        </h1>
        <p className="text-gray-600">
          Rapports détaillés et analyses des performances
        </p>
      </div>

      {/* Filter Period */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setDateFilter('week')}
          className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
            dateFilter === 'week'
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Cette semaine
        </button>
        <button
          onClick={() => setDateFilter('month')}
          className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
            dateFilter === 'month'
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Ce mois
        </button>
        <button
          onClick={() => setDateFilter('year')}
          className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
            dateFilter === 'year'
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Cette année
        </button>
      </div>

      {/* Export Button */}
      <div className="mb-8">
        <button
          onClick={() => setShowReport(!showReport)}
          className={`${showReport ? 'bg-green-500 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'} text-white font-semibold px-6 py-2 rounded-lg transition flex items-center gap-2`}
        >
          <Download className="w-5 h-5" />
          {showReport ? 'Masquer le rapport' : 'Générer un rapport'}
        </button>
      </div>

      {/* Export Report */}
      {showReport && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <Download className="w-6 h-6" />
            Rapport exportable
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-green-700 text-sm">Période</p>
              <p className="text-2xl font-bold text-green-900 capitalize">{dateFilter}</p>
            </div>
            <div>
              <p className="text-green-700 text-sm">Généré le</p>
              <p className="text-lg font-bold text-green-900">{new Date().toLocaleDateString('fr-FR')}</p>
            </div>
            <div>
              <p className="text-green-700 text-sm">Format</p>
              <p className="text-lg font-bold text-green-900">PDF / CSV</p>
            </div>
            <div>
              <p className="text-green-700 text-sm">Statut</p>
              <p className="text-lg font-bold text-green-900">✓ Prêt</p>
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition flex items-center gap-2">
            <Download className="w-4 h-4" />
            Télécharger le rapport
          </button>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium text-sm">Commandes</h3>
            <TrendingUp className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">{currentStats.commandes}</p>
          <div className="bg-blue-100 rounded-lg h-2"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium text-sm">Chiffre d'affaires</h3>
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">{currentStats.revenus.toLocaleString()}€</p>
          <div className="bg-green-100 rounded-lg h-2"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium text-sm">Satisfaction</h3>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">{currentStats.satisfaction}/5</p>
          <div className="bg-red-100 rounded-lg h-2"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium text-sm">Plaintes</h3>
            <AlertCircle className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">{currentStats.plaintes}</p>
          <div className="bg-yellow-100 rounded-lg h-2"></div>
        </div>
      </div>

      {/* Evolution Chart Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Évolution des commandes
          </h2>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <p className="text-gray-500">Graphique d'évolution (Chart.js)</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            Évolution des revenus
          </h2>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <p className="text-gray-500">Graphique d'évolution (Chart.js)</p>
          </div>
        </div>
      </div>

      {/* Complaints Analysis */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-orange-500" />
          Analyse des plaintes
        </h2>

        {/* Filter */}
        <div className="mb-6 flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>Tous les types</option>
            <option>Livraison tardive</option>
            <option>Commande incorrecte</option>
            <option>Qualité du service</option>
            <option>Dommages au colis</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>Tous les statuts</option>
            <option>En cours</option>
            <option>Résolu</option>
            <option>En attente</option>
          </select>
        </div>

        {/* Complaints Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Statut</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaintsList.map((complaint) => (
                <tr key={complaint.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{complaint.client}</td>
                  <td className="px-6 py-4 text-gray-600">{complaint.type}</td>
                  <td className="px-6 py-4 text-gray-600 max-w-xs truncate">{complaint.description}</td>
                  <td className="px-6 py-4 text-gray-600">{complaint.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        complaint.status === 'Résolu'
                          ? 'bg-green-100 text-green-800'
                          : complaint.status === 'En cours'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 justify-center w-full">
                      Voir détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
