import { useEffect, useState } from 'react';

export function useAuthHook() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authInProgress, setAuthInProgress] = useState(true);
  const [role, setRole] = useState('');

  const handleLogin = async (username: string, password: string) => {
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

  const handleLogout = async () => {
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
    if (response.ok) {
      setIsAuthenticated(true);
    }
    setAuthInProgress(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    isAuthenticated,
    role,
    handleLogin,
    handleLogout,
    checkAuth,
    authInProgress,
  };
}
