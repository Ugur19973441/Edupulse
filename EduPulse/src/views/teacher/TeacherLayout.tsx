import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/common/Sidebar';
import { Topbar } from '@/components/common/Topbar';

const sections = [
  {
    title: 'Öğretmen',
    items: [
      { to: '', label: 'Ana Sayfa' },
      { to: 'schedule', label: 'Ders Programı' },
      { to: 'homework', label: 'Ödevler' },
      { to: 'grades', label: 'Not Girişi' },
      { to: 'attendance', label: 'Devamsızlık' },
      { to: 'reports', label: 'Raporlar' },
      { to: 'files', label: 'Dosyalar' },
      { to: 'announcements', label: 'Duyurular' },
      { to: 'messages', label: 'Mesajlar' },
      { to: 'evaluation', label: 'Genel Değerlendirme' },
      { to: 'profile', label: 'Profil' },
    ],
  },
];

export default function TeacherLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar sections={sections} base="/teacher" />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}