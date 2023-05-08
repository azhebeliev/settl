import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminRoleGuard } from './auth/AdminRoleGuard';
import { AuthProvider } from './auth/AuthContext';
import { AuthGuard } from './auth/AuthGuard';
import { Layout } from './layout/Layout';
import { InvoicesView } from './views/InvoicesView';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to='/invoices' replace />} />

            <Route path='login' element={<div>Login</div>} />

            <Route
              path='invoices'
              element={
                <AuthGuard>
                  <InvoicesView />
                </AuthGuard>
              }
            />
            <Route
              path='history'
              element={
                <AuthGuard>
                  <div>History</div>
                </AuthGuard>
              }
            />
            <Route
              path='debitors'
              element={
                <AuthGuard>
                  <div>Debitors</div>
                </AuthGuard>
              }
            />
            <Route
              path='statistics'
              element={
                <AuthGuard>
                  <div>Statistics</div>
                </AuthGuard>
              }
            />

            <Route
              path='admin'
              element={
                <AuthGuard>
                  <AdminRoleGuard>
                    <div>Admin</div>
                  </AdminRoleGuard>
                </AuthGuard>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
