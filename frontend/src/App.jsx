import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, UserRole } from './context/AuthContext';
import Login from './pages/Login';
import NGODashboard from './pages/ngo/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import CorporateDashboard from './pages/corporate/Dashboard';
import Marketplace from './pages/Marketplace';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/layout/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<AppLayout />}>
            {/* Shared Route */}
            <Route element={<ProtectedRoute />}>
              <Route path="/marketplace" element={<Marketplace />} />
            </Route>

            {/* NGO Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.NGO]} />}>
              <Route path="/ngo/dashboard" element={<NGODashboard />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.ADMIN]} />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>

            {/* Corporate Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.CORPORATE]} />}>
              <Route path="/corporate/dashboard" element={<CorporateDashboard />} />
            </Route>
          </Route>

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
