import { Navigate, Outlet, RouteObject, useLocation, useRoutes } from 'react-router-dom';
import { useAuth } from '@/auth/AuthContext';
import LoginPage from '@/views/auth/LoginPage';
import AdminLayout from '@/views/admin/AdminLayout';
import TeacherLayout from '@/views/teacher/TeacherLayout';
import ParentLayout from '@/views/parent/ParentLayout';
import AdminUsers from '@/views/admin/Users';
import AdminRoles from '@/views/admin/Roles';
import AdminLogs from '@/views/admin/Logs';
import AdminSettings from '@/views/admin/Settings';
import TeacherDashboard from '@/views/teacher/Dashboard';
import TeacherSchedule from '@/views/teacher/Schedule';
import TeacherHomework from '@/views/teacher/Homework';
import TeacherGrades from '@/views/teacher/Grades';
import TeacherAttendance from '@/views/teacher/Attendance';
import TeacherReports from '@/views/teacher/Reports';
import TeacherFiles from '@/views/teacher/Files';
import TeacherAnnouncements from '@/views/teacher/Announcements';
import TeacherMessages from '@/views/teacher/Messages';
import TeacherEvaluation from '@/views/teacher/Evaluation';
import TeacherProfile from '@/views/teacher/Profile';
import ParentHome from '@/views/parent/Home';
import ParentSchedule from '@/views/parent/ViewSchedule';
import ParentGrades from '@/views/parent/ViewGrades';
import ParentAttendance from '@/views/parent/ViewAttendance';
import ParentReports from '@/views/parent/Reports';
import ParentFiles from '@/views/parent/Files';
import ParentAnnouncements from '@/views/parent/Announcements';
import ParentMessages from '@/views/parent/Messages';
import ParentEvaluation from '@/views/parent/Evaluation';
import ParentProfile from '@/views/parent/Profile';

function RequireAuth({ roles }: { roles?: Array<'Admin' | 'Teacher' | 'Parent'> }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to={`/${user.role.toLowerCase()}`} replace />;
  return <Outlet />;
}

function RedirectByRole() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={`/${user.role.toLowerCase()}`} replace />;
}

export function AppRouter() {
  const routes: RouteObject[] = [
    { path: '/', element: <RedirectByRole /> },
    { path: '/login', element: <LoginPage /> },
    {
      element: <RequireAuth roles={["Admin"]} />, children: [
        {
          path: '/admin', element: <AdminLayout />, children: [
            { index: true, element: <AdminUsers /> },
            { path: 'users', element: <AdminUsers /> },
            { path: 'roles', element: <AdminRoles /> },
            { path: 'logs', element: <AdminLogs /> },
            { path: 'settings', element: <AdminSettings /> },
          ]
        }
      ]
    },
    {
      element: <RequireAuth roles={["Teacher"]} />, children: [
        {
          path: '/teacher', element: <TeacherLayout />, children: [
            { index: true, element: <TeacherDashboard /> },
            { path: 'schedule', element: <TeacherSchedule /> },
            { path: 'homework', element: <TeacherHomework /> },
            { path: 'grades', element: <TeacherGrades /> },
            { path: 'attendance', element: <TeacherAttendance /> },
            { path: 'reports', element: <TeacherReports /> },
            { path: 'files', element: <TeacherFiles /> },
            { path: 'announcements', element: <TeacherAnnouncements /> },
            { path: 'messages', element: <TeacherMessages /> },
            { path: 'evaluation', element: <TeacherEvaluation /> },
            { path: 'profile', element: <TeacherProfile /> },
          ]
        }
      ]
    },
    {
      element: <RequireAuth roles={["Parent"]} />, children: [
        {
          path: '/parent', element: <ParentLayout />, children: [
            { index: true, element: <ParentHome /> },
            { path: 'schedule', element: <ParentSchedule /> },
            { path: 'grades', element: <ParentGrades /> },
            { path: 'attendance', element: <ParentAttendance /> },
            { path: 'reports', element: <ParentReports /> },
            { path: 'files', element: <ParentFiles /> },
            { path: 'announcements', element: <ParentAnnouncements /> },
            { path: 'messages', element: <ParentMessages /> },
            { path: 'evaluation', element: <ParentEvaluation /> },
            { path: 'profile', element: <ParentProfile /> },
          ]
        }
      ]
    },
  ];
  return useRoutes(routes);
}