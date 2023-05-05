import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminRoleGuard } from './auth/AdminRoleGuard';
import { AuthGuard } from './auth/AuthGuard';
import { useAuthHook } from './auth/AuthHook';
import { Layout } from './layout/Layout';

function App() {
  const {
    isAuthenticated,
    role,
    handleLogin,
    handleLogout,
    checkAuth,
    authInProgress,
  } = useAuthHook();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              handleLogout={handleLogout}
              isAuthenticated={isAuthenticated}
              role={'admin'}
            />
          }
        >
          <Route index element={<Navigate to='/invoices' replace />} />

          <Route path='login' element={<div>Login</div>} />

          <Route
            path='invoices'
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <div>Invoices</div>
              </AuthGuard>
            }
          />
          <Route
            path='history'
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <div>History</div>
              </AuthGuard>
            }
          />
          <Route
            path='debitors'
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <div>Debitors</div>
              </AuthGuard>
            }
          />
          <Route
            path='statistics'
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <div>Statistics</div>
              </AuthGuard>
            }
          />

          <Route
            path='admin'
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <AdminRoleGuard role={'admin'}>
                  <div>Admin</div>
                </AdminRoleGuard>
              </AuthGuard>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
