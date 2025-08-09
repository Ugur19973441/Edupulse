import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()
  return (
    <button onClick={toggle} className="inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600">
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isDark ? 'Açık' : 'Koyu'}</span>
    </button>
  )
}