import { useState, useContext } from 'react';
import { X, Settings, Bell, Lock, User, Database, Moon, Globe } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export default function SettingsModal({ isOpen, onClose }) {
  const { user } = useContext(AuthContext);
  
  const [settings, setSettings] = useState({
    // Profil
    nom: user?.name || 'Admin User',
    email: user?.email || 'admin@chezfernando.com',
    telephone: '+33 6 12 34 56 78',
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    
    // Sécurité
    twoFactor: false,
    
    // Préférences
    darkMode: false,
    language: 'fr',
    timeZone: 'Europe/Paris',
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [activeTab, setActiveTab] = useState('profile');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setSuccessMessage('Paramètre mis à jour');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    console.log('Mot de passe changé');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setShowPasswordForm(false);
    setSuccessMessage('Mot de passe changé avec succès');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">Paramètres</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 px-6 py-3 font-semibold transition flex items-center justify-center gap-2 border-b-2 ${
              activeTab === 'profile'
                ? 'text-orange-600 border-orange-500'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            <User className="w-5 h-5" />
            Profil
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 px-6 py-3 font-semibold transition flex items-center justify-center gap-2 border-b-2 ${
              activeTab === 'notifications'
                ? 'text-orange-600 border-orange-500'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            <Bell className="w-5 h-5" />
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex-1 px-6 py-3 font-semibold transition flex items-center justify-center gap-2 border-b-2 ${
              activeTab === 'security'
                ? 'text-orange-600 border-orange-500'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            <Lock className="w-5 h-5" />
            Sécurité
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`flex-1 px-6 py-3 font-semibold transition flex items-center justify-center gap-2 border-b-2 ${
              activeTab === 'preferences'
                ? 'text-orange-600 border-orange-500'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            <Globe className="w-5 h-5" />
            Préférences
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {successMessage && (
            <div className="m-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              ✓ {successMessage}
            </div>
          )}

          {/* PROFIL TAB */}
          {activeTab === 'profile' && (
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-orange-500" />
                  Informations du profil
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={settings.nom}
                      onChange={(e) => handleSettingChange('nom', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleSettingChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={settings.telephone}
                      onChange={(e) => handleSettingChange('telephone', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition">
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5 text-orange-500" />
                Préférences de notification
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">Notifications par email</p>
                    <p className="text-sm text-gray-600">Recevoir les notifications importantes par email</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">Notifications SMS</p>
                    <p className="text-sm text-gray-600">Recevoir les alertes critiques par SMS</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.smsNotifications}
                    onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">Notifications push</p>
                    <p className="text-sm text-gray-600">Recevoir les notifications en temps réel</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.pushNotifications}
                    onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'security' && (
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-500" />
                Sécurité du compte
              </h3>

              <div className="space-y-4">
                <button
                  onClick={() => setShowPasswordForm(!showPasswordForm)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  {showPasswordForm ? 'Annuler' : 'Changer le mot de passe'}
                </button>

                {showPasswordForm && (
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mot de passe actuel
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        value={passwordForm.currentPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nouveau mot de passe
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        value={passwordForm.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirmer le mot de passe
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={passwordForm.confirmPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                      Mettre à jour le mot de passe
                    </button>
                  </form>
                )}

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Authentification à deux facteurs</h4>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">2FA</p>
                      <p className="text-sm text-gray-600">Activez pour une sécurité renforcée</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.twoFactor}
                      onChange={(e) => handleSettingChange('twoFactor', e.target.checked)}
                      className="w-6 h-6 accent-orange-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PREFERENCES TAB */}
          {activeTab === 'preferences' && (
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-500" />
                Préférences générales
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Langue
                  </label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fuseau horaire
                  </label>
                  <select
                    value={settings.timeZone}
                    onChange={(e) => handleSettingChange('timeZone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
                    <option value="Europe/London">Europe/London (GMT)</option>
                    <option value="America/New_York">America/New_York (GMT-5)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-2">
                      <Moon className="w-5 h-5" />
                      Mode sombre
                    </p>
                    <p className="text-sm text-gray-600">Activer le thème sombre</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.darkMode}
                    onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-red-500" />
                  Données
                </h4>
                <button className="w-full px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-semibold rounded-lg transition">
                  Exporter mes données
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
