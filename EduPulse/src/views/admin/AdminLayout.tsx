import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/common/Sidebar';
import { Topbar } from '@/components/common/Topbar';

const sections = [
  {
    title: 'Yönetim',
    items: [
      { to: 'users', label: 'Kullanıcılar' },
      { to: 'roles', label: 'Roller' },
      { to: 'logs', label: 'Kayıtlar' },
      { to: 'settings', label: 'Ayarlar' },
    ],
  },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar sections={sections} base="/admin" />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}