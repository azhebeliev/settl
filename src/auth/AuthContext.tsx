import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  role: '',
  login: (username: string, password: string) => {},
  logout: () => {},
  checkAuth: () => {},
  authInProgress: true,
});

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authInProgress, setAuthInProgress] = useState(true);
  const [role, setRole] = useState('');

  const login = async (username: string, password: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    }).then((res) => res.json());

    if (response.ok) {
      setIsAuthenticated(true);
    }
    if (response.user === 'admin') {
      setRole('admin');
    }
  };

  const logout = async () => {
    // const response = await fetch('/api/logout', {
    //   method: 'POST',
    //   credentials: 'include',
    // });
    const response = { ok: true };

    if (response.ok) {
      setIsAuthenticated(false);
    }
  };

  const checkAuth = async () => {
    setAuthInProgress(true);
    // const response = await fetch('/api/authenticated', {
    //   method: 'GET',
    //   credentials: 'include',
    // });
    const response = { ok: true };
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (response.ok) {
          setIsAuthenticated(true);
          resolve('');
        }
      }, 1000);
    });
    setAuthInProgress(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        role,
        login,
        logout,
        checkAuth,
        authInProgress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
