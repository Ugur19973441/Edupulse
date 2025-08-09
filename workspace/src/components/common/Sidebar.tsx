import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const adminItems = [
  { to: '/admin', label: 'Ana Sayfa' },
  { to: '/admin/users', label: 'Kullanıcı Yönetimi' },
  { to: '/admin/roles', label: 'Rol & Yetkiler' },
  { to: '/admin/logs', label: 'İşlem Kayıtları' },
  { to: '/admin/settings', label: 'Ayarlar' },
  { to: '/admin/profile', label: 'Profil' },
]

const teacherItems = [
  { to: '/teacher', label: 'Ana Sayfa' },
  { to: '/teacher/schedule', label: 'Ders Programı' },
  { to: '/teacher/assignments', label: 'Ödevler' },
  { to: '/teacher/grades', label: 'Not Girişi' },
  { to: '/teacher/attendance', label: 'Devamsızlık' },
  { to: '/teacher/reports', label: 'Raporlar' },
  { to: '/teacher/files', label: 'Dosyalar' },
  { to: '/teacher/announcements', label: 'Duyurular' },
  { to: '/teacher/messages', label: 'Mesajlar' },
  { to: '/teacher/evaluation', label: 'Genel Değerlendirme' },
  { to: '/teacher/profile', label: 'Profil' },
]

const parentItems = [
  { to: '/parent', label: 'Ana Sayfa' },
  { to: '/parent/schedule', label: 'Ders Programı' },
  { to: '/parent/grades', label: 'Notlarım' },
  { to: '/parent/attendance', label: 'Devamsızlık' },
  { to: '/parent/assignments', label: 'Ödevlerim' },
  { to: '/parent/reports', label: 'Raporlar' },
  { to: '/parent/files', label: 'Dosyalar' },
  { to: '/parent/announcements', label: 'Duyurular' },
  { to: '/parent/messages', label: 'Mesajlar' },
  { to: '/parent/evaluation', label: 'Genel Değerlendirme' },
  { to: '/parent/profile', label: 'Profil' },
  { to: '/parent/view-schedule', label: 'Özel: Program' },
  { to: '/parent/view-grades', label: 'Özel: Notlar' },
  { to: '/parent/view-attendance', label: 'Özel: Devamsızlık' },
]

export default function Sidebar() {
  const { role } = useAuth()
  const location = useLocation()
  const items = role === 'admin' ? adminItems : role === 'teacher' ? teacherItems : parentItems
  return (
    <aside className="w-64 shrink-0 h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"> 
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Link to={role ? `/${role}` : '/login'} className="flex items-center gap-2">
          <img src="/edupulse%20logo-1.png" alt="EduPulse" className="h-8 w-auto" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
          <span className="font-semibold">EduPulse</span>
        </Link>
      </div>
      <nav className="p-2 flex flex-col gap-1">
        {items.map(item => {
          const active = location.pathname === item.to
          return (
            <Link key={item.to} to={item.to} className={`px-3 py-2 rounded-md ${active ? 'bg-primary-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}