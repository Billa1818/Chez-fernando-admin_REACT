# Interface Admin - Chez Fernando

## 🚀 Démarrage

```bash
npm run dev
```

L'application sera disponible à: **http://localhost:5173**

## 📝 Authentification (Simulation)

### Page Login - Mode Normal
- **Email:** Entrez n'importe quel email valide
- **Mot de passe:** Au moins 6 caractères

### Page Login - Mot de passe oublié
- **Email:** Votre adresse email
- **Code OTP:** Utilisez `123456` (ou n'importe quel code à 6 chiffres)
- **Nouveau mot de passe:** Minimum 6 caractères
- **Confirmer:** Doit correspondre au nouveau mot de passe

## 🎨 Couleurs & Design

- **Couleur principale:** Orange (#f97316)
- **Logo:** "CF" (Chez Fernando)
- **Design responsive:** Mobile-first avec Tailwind CSS
- **Framework:** React 19 + React Router DOM

## 📋 Structure de l'Application

```
src/
├── context/
│   └── AuthContext.jsx          # État d'authentification (useContext)
├── pages/
│   ├── Login.jsx                # Page de connexion (4 étapes)
│   └── Dashboard.jsx            # Page principale
├── components/
│   ├── Navbar.jsx               # Barre supérieure
│   ├── Sidebar.jsx              # Menu latéral collapsible
│   ├── StatCard.jsx             # Cartes statistiques
│   ├── UsersList.jsx            # Gestion managers/livreurs
│   └── AdvancedStats.jsx        # Statistiques avancées
├── App.jsx                      # Routing (Login + Dashboard protégé)
├── index.css                    # Styles globaux
└── main.jsx                     # Entry point
```

## 📊 Fonctionnalités

### 1. Vue d'ensemble (Dashboard)
- ✅ Statistiques en temps réel (4 cartes)
- ✅ Graphiques de performance (placeholder Chart.js)
- ✅ Alertes système (3 niveaux: rouge/jaune/vert)

### 2. Gestion des Utilisateurs
- ✅ Onglets: Managers / Livreurs
- ✅ Formulaire de création avec validation
- ✅ Tableau des utilisateurs
- ✅ Actions: Détails, Activer/Désactiver

#### Managers:
- Liste avec: Nom, Email, Téléphone, Statut, Inscription
- Formulaire de création

#### Livreurs:
- Liste avec: Nom, Email, Téléphone, **Commandes**, Statut
- Formulaire de création
- Suivi des commandes effectuées

### 3. Statistiques Avancées
- ✅ Filtres de période (Semaine/Mois/Année)
- ✅ Statistiques adaptées par période
- ✅ Rapport exportable (PDF/CSV)
- ✅ Graphiques d'évolution (placeholders)
- ✅ Analyse des plaintes
  - Types: Livraison tardive, Commande incorrecte, Qualité service, Dommages
  - Statuts: En cours, Résolu, En attente
  - Tableau filtrable avec détails

## 🔐 Contexte d'Authentification (useContext)

### AuthContext fournit:

```javascript
const {
  user,              // { id, email, name, role, avatar, lastLogin }
  isAuthenticated,   // boolean
  loading,           // boolean (pour les états de chargement)
  login,             // async (email, password) => { success, message }
  logout,            // fonction synchrone
  resetPassword      // async (email, otp, newPassword) => { success, message }
} = useContext(AuthContext);
```

### Utilisation dans les composants:

```javascript
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function MonComposant() {
  const { user, logout } = useContext(AuthContext);
  
  return (
    <>
      <p>Bienvenue {user?.name}</p>
      <button onClick={logout}>Déconnexion</button>
    </>
  );
}
```

### Fonctions disponibles:

**`login(email, password)`**
- Authentifie l'utilisateur avec email et mot de passe
- Stocke l'utilisateur et le token en localStorage
- Retourne: `{ success: boolean, message?: string }`

**`logout()`**
- Déconnecte l'utilisateur
- Supprime les données de localStorage

**`resetPassword(email, otp, newPassword)`**
- Réinitialise le mot de passe avec un code OTP
- Code OTP test: `123456`
- Retourne: `{ success: boolean, message: string }`

## 🛡️ Routes Protégées

- `/` - Login (accessible sans authentification)
- `/dashboard` - Dashboard (protégé, redirige vers login si non authentifié)

## 📦 Dépendances

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^6.x" (installé)
}
```

### CDN inclus:
- **Tailwind CSS** (v3)
- **Chart.js** (v3.9.1)

## 🎯 Prochaines Étapes

Pour intégrer avec une vraie API:

1. **AuthContext.jsx** - Remplacer les simulations par des appels API
   ```javascript
   const response = await fetch('/api/auth/login', {
     method: 'POST',
     body: JSON.stringify({ email, password, otp })
   });
   ```

2. **UsersList.jsx** - Récupérer les vrais utilisateurs
3. **Dashboard.jsx** - Intégrer de vrais graphiques Chart.js
4. **AdvancedStats.jsx** - Récupérer les données réelles de l'API

## 🎨 Personnalisation Tailwind

Pour modifier les couleurs (orange), éditer la config Tailwind:
```html
<!-- index.html -->
<script>
  tailwind.config = {
    theme: {
      colors: {
        orange: { 500: '#f97316' }
      }
    }
  }
</script>
```

## 📱 Responsive Design

- **Mobile:** Sidebar collapsible, layouts adaptés
- **Tablet:** Grilles 2 colonnes
- **Desktop:** Grilles 3-4 colonnes avec sidebar

## ✅ Checklist Features

- [x] Page de login avec 4 étapes
- [x] Gestion de l'authentification avec useContext
- [x] Dashboard avec vue d'ensemble
- [x] Gestion des managers
- [x] Gestion des livreurs
- [x] Statistiques avancées
- [x] Analyse des plaintes
- [x] Design responsive
- [x] Navigation collapsible
- [x] Routes protégées

---

**Besoin d'aide?** Consultez le code source ou lisez les commentaires dans les composants.
