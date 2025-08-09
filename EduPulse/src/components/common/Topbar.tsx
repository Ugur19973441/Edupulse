import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/auth/AuthContext';

export function Topbar() {
  const { toggle, mode } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-4 h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <Link to="/" className="text-brand font-semibold">EduPulse</Link>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Tema Değiştir">
          {mode === 'dark' ? '🌙' : '🌞'}
        </button>
        {user && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 dark:text-slate-300">{user.name} ({user.role})</span>
            <button onClick={logout} className="text-sm text-red-600 hover:underline">Çıkış</button>
          </div>
        )}
      </div>
    </header>
  );
}