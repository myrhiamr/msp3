import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const showFlashMessage = (message, type = 'info') => {
    setFlashMessage({ message, type });
    setTimeout(() => setFlashMessage(null), 3000);
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AppContext.Provider value={{ flashMessage, showFlashMessage, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);