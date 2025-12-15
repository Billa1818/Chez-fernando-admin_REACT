import { useState } from 'react';
import { X, Trash2, CheckCircle, AlertCircle, Info, Bell } from 'lucide-react';

export default function NotificationsModal({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Nouvelle commande',
      message: 'Vous avez reçu une nouvelle commande #12345',
      time: '5 min',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Livreur indisponible',
      message: 'Ahmed Hassan est hors ligne depuis 30 minutes',
      time: '15 min',
      read: false
    },
    {
      id: 3,
      type: 'error',
      title: 'Erreur système',
      message: 'Serveur charge élevée - CPU à 87%',
      time: '1 h',
      read: true
    },
    {
      id: 4,
      type: 'info',
      title: 'Rapport quotidien',
      message: 'Votre rapport du jour est prêt à télécharger',
      time: '2 h',
      read: true
    },
    {
      id: 5,
      type: 'success',
      title: 'Paiement reçu',
      message: 'Paiement de 450€ reçu avec succès',
      time: '4 h',
      read: true
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const deleteAll = () => {
    setNotifications([]);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getBgColor = (type, read) => {
    if (read) return 'bg-gray-50 hover:bg-gray-100';
    switch (type) {
      case 'success':
        return 'bg-green-50 hover:bg-green-100';
      case 'error':
        return 'bg-red-50 hover:bg-red-100';
      case 'warning':
        return 'bg-yellow-50 hover:bg-yellow-100';
      case 'info':
        return 'bg-blue-50 hover:bg-blue-100';
      default:
        return 'bg-gray-50 hover:bg-gray-100';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            {unreadCount > 0 && (
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white">
                {unreadCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {notifications.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-semibold">Pas de notifications</p>
                <p className="text-gray-400 text-sm">Vous avez tout vu !</p>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`px-6 py-4 border-l-4 transition ${getBgColor(notif.type, notif.read)} ${
                    notif.type === 'success' ? 'border-green-500' :
                    notif.type === 'error' ? 'border-red-500' :
                    notif.type === 'warning' ? 'border-yellow-500' :
                    'border-blue-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getIcon(notif.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-gray-900">{notif.title}</h3>
                        {!notif.read && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-gray-500">{notif.time}</p>
                        <div className="flex gap-2">
                          {!notif.read && (
                            <button
                              onClick={() => markAsRead(notif.id)}
                              className="text-xs text-orange-500 hover:text-orange-600 font-semibold"
                            >
                              Marquer comme lu
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notif.id)}
                            className="text-gray-400 hover:text-red-500 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <button
              onClick={deleteAll}
              className="w-full px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg font-semibold transition"
            >
              Supprimer tout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
