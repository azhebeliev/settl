import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminRoleGuard } from './auth/AdminRoleGuard';
import { AuthGuard } from './auth/AuthGuard';
import { useAuthHook } from './auth/AuthHook';

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
        <Route element={<div>Layout NavBar</div>}>
          <Route path='/login' element={<div>Login</div>} />
          <AuthGuard isAuthenticated={true}>
            <>
              <Route index element={<Navigate to='/invoices' replace />} />
              <Route path='/invoices' element={<div>Invoices</div>} />
              <Route path='/history' element={<div>History</div>} />
              <Route path='/debitors' element={<div>Debitors</div>} />
              <Route path='/statistics' element={<div>Statistics</div>} />
              <AdminRoleGuard role={role}>
                <Route path='/admin' element={<div>Admin</div>} />
              </AdminRoleGuard>
            </>
          </AuthGuard>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
