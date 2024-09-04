import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
  userInfo: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  const isLoggedIn = !!userInfo;

  const login = (userData) => {
    try {
      setUserInfo(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving user data to localStorage:", error);
    }
  };

  const logout = () => {
    setUserInfo(null);
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error("Error removing user data from localStorage:", error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'user') {
        try {
          const newUser = event.newValue ? JSON.parse(event.newValue) : null;
          setUserInfo(newUser);
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
