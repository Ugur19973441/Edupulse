import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from '../common/Layout'
import AdminDashboard from '../../components/Admin/pages/Dashboard'
import Users from '../../components/Admin/pages/Users'
import Roles from '../../components/Admin/pages/Roles'
import Logs from '../../components/Admin/pages/Logs'
import Settings from '../../components/Admin/pages/Settings'
import Profile from '../../components/Admin/pages/Profile'

export default function AdminLayout() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Layout>
  )
}