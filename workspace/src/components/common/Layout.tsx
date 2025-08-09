import { useAuth } from '../../hooks/useAuth'
import Sidebar from './Sidebar'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { email, logout, role } = useAuth()
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
          <div className="font-medium">{role && role.toUpperCase()} Paneli</div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span className="text-sm text-gray-600 dark:text-gray-300">{email}</span>
            <button onClick={logout} className="text-sm px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Çıkış</button>
          </div>
        </header>
        <main className="flex-1 overflow-auto container-padded">
          {children}
        </main>
      </div>
    </div>
  )
}