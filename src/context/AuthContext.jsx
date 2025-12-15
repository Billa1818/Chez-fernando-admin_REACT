import { createContext, useState, useCallback, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      // Simulation de l'authentification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validation simple
      if (!email || !password || password.length < 6) {
        return { success: false, message: 'Email ou mot de passe invalide' };
      }
      
      const mockUser = {
        id: 1,
        email,
        name: 'Admin User',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
        lastLogin: new Date().toISOString(),
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'fake-jwt-token');
      
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Erreur de connexion' };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, []);

  const resetPassword = useCallback(async (email, otp, newPassword) => {
    setLoading(true);
    try {
      // Simulation de la réinitialisation du mot de passe avec OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Vérification OTP simple
      if (otp !== '123456' && !/^\d{6}$/.test(otp)) {
        return { success: false, message: 'Code OTP invalide' };
      }
      
      if (!newPassword || newPassword.length < 6) {
        return { success: false, message: 'Le mot de passe doit contenir au moins 6 caractères' };
      }
      
      return { success: true, message: 'Mot de passe réinitialisé avec succès' };
    } catch (error) {
      return { success: false, message: 'Erreur lors de la réinitialisation' };
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans AuthProvider');
  }
  return context;
};
