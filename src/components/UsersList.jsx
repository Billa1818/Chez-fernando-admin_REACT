import { useState } from 'react';
import { Plus, X, Eye, Toggle2, Mail, Phone, MapPin, Calendar, Package } from 'lucide-react';

export default function UsersList() {
  const [userType, setUserType] = useState('managers');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    statut: 'actif'
  });

  const managers = [
    {
      id: 1,
      nom: 'Jean Dupont',
      email: 'jean@chezfernando.com',
      telephone: '+33 6 12 34 56 78',
      statut: 'actif',
      inscription: '2024-01-15'
    },
    {
      id: 2,
      nom: 'Marie Martin',
      email: 'marie@chezfernando.com',
      telephone: '+33 6 98 76 54 32',
      statut: 'actif',
      inscription: '2024-02-20'
    },
  ];

  const livreurs = [
    {
      id: 1,
      nom: 'Ahmed Hassan',
      email: 'ahmed@livreurs.com',
      telephone: '+33 6 45 67 89 01',
      statut: 'actif',
      inscription: '2024-03-10',
      commandes: 142
    },
    {
      id: 2,
      nom: 'Sophie Bernard',
      email: 'sophie@livreurs.com',
      telephone: '+33 6 23 45 67 89',
      statut: 'inactif',
      inscription: '2024-03-12',
      commandes: 98
    },
    {
      id: 3,
      nom: 'Michel Leclerc',
      email: 'michel@livreurs.com',
      telephone: '+33 6 34 56 78 90',
      statut: 'actif',
      inscription: '2024-04-01',
      commandes: 167
    },
  ];

  const users = userType === 'managers' ? managers : livreurs;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nouveau ' + userType.slice(0, -1) + ':', formData);
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      adresse: '',
      statut: 'actif'
    });
    setShowForm(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Gestion des Utilisateurs
        </h1>
        <p className="text-gray-600">
          Gérez les managers et les livreurs
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setUserType('managers')}
          className={`px-6 py-3 font-semibold transition border-b-2 flex items-center gap-2 ${
            userType === 'managers'
              ? 'text-orange-600 border-orange-500'
              : 'text-gray-600 border-transparent hover:text-gray-800'
          }`}
        >
          <Mail className="w-5 h-5" />
          Managers
        </button>
        <button
          onClick={() => setUserType('livreurs')}
          className={`px-6 py-3 font-semibold transition border-b-2 flex items-center gap-2 ${
            userType === 'livreurs'
              ? 'text-orange-600 border-orange-500'
              : 'text-gray-600 border-transparent hover:text-gray-800'
          }`}
        >
          <Package className="w-5 h-5" />
          Livreurs
        </button>
      </div>

      {/* Action Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className={`${showForm ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'} text-white font-semibold px-6 py-2 rounded-lg transition flex items-center gap-2`}
        >
          {showForm ? (
            <>
              <X className="w-5 h-5" />
              Annuler
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              Créer un {userType === 'managers' ? 'manager' : 'livreur'}
            </>
          )}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Créer un nouveau {userType === 'managers' ? 'manager' : 'livreur'}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleFormChange}
                placeholder="Jean Dupont"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="jean@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleFormChange}
                placeholder="+33 6 00 00 00 00"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Statut
              </label>
              <select
                name="statut"
                value={formData.statut}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="actif">Actif</option>
                <option value="inactif">Inactif</option>
                <option value="suspendu">Suspendu</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse
              </label>
              <textarea
                name="adresse"
                value={formData.adresse}
                onChange={handleFormChange}
                placeholder="123 Rue de la Paix, 75000 Paris"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-24"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
              >
                Créer {userType === 'managers' ? 'le manager' : 'le livreur'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nom</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Téléphone</th>
                {userType === 'livreurs' && (
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Commandes</th>
                )}
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Statut</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{user.nom}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600">{user.telephone}</td>
                  {userType === 'livreurs' && (
                    <td className="px-6 py-4 text-gray-600">{user.commandes}</td>
                  )}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.statut === 'actif'
                          ? 'bg-green-100 text-green-800'
                          : user.statut === 'inactif'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.statut.charAt(0).toUpperCase() + user.statut.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-orange-500 hover:text-orange-600 font-semibold mr-4 inline-flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Détails
                    </button>
                    <button
                      className={`font-semibold inline-flex items-center gap-1 ${
                        user.statut === 'actif'
                          ? 'text-red-500 hover:text-red-600'
                          : 'text-green-500 hover:text-green-600'
                      }`}
                    >
                      <Toggle2 className="w-4 h-4" />
                      {user.statut === 'actif' ? 'Désactiver' : 'Activer'}
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
