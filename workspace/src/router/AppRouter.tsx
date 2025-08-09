import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import type { ReactElement } from 'react'
import { AuthProvider } from '../providers/AuthProvider'
import { ThemeProvider } from '../providers/ThemeProvider'
import { useAuth } from '../hooks/useAuth'
import Login from '../pages/Auth/Login'
import AdminLayout from '../components/Admin/AdminLayout'
import TeacherLayout from '../components/Teacher/TeacherLayout'
import ParentLayout from '../components/Parent/ParentLayout'

function ProtectedRoute({ children, allow }: { children: ReactElement; allow: Array<'admin'|'teacher'|'parent'> }) {
  const { isAuthenticated, role } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (role && allow.includes(role)) return children
  return <Navigate to="/login" replace />
}

export function AppRouter() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allow={["admin"]}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/*"
              element={
                <ProtectedRoute allow={["teacher"]}>
                  <TeacherLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/parent/*"
              element={
                <ProtectedRoute allow={["parent"]}>
                  <ParentLayout />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}