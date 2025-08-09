import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from '../common/Layout'
import Dashboard from './pages/Dashboard'
import Schedule from './pages/Schedule'
import Assignments from './pages/Assignments'
import Grades from './pages/Grades'
import Attendance from './pages/Attendance'
import Reports from './pages/Reports'
import Files from './pages/Files'
import Announcements from './pages/Announcements'
import Messages from './pages/Messages'
import Evaluation from './pages/Evaluation'
import Profile from './pages/Profile'

export default function TeacherLayout() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/files" element={<Files />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/teacher" replace />} />
      </Routes>
    </Layout>
  )
}