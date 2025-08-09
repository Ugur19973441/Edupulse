import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Role = 'admin' | 'teacher' | 'parent'

type AuthContextType = {
  isAuthenticated: boolean
  role: Role | null
  email: string | null
  login: (email: string, password: string) => Promise<{ success: boolean; role?: Role; message?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEMO_USERS: Array<{ email: string; password: string; role: Role }> = [
  { email: 'admin@demo.com', password: '123456', role: 'admin' },
  { email: 'ogretmen@demo.com', password: '123456', role: 'teacher' },
  { email: 'veli@demo.com', password: '123456', role: 'parent' },
]

const STORAGE_KEY = 'edupulse_auth'

type StoredAuth = { token: string; role: Role; email: string }

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null)
  const [role, setRole] = useState<Role | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const parsed: StoredAuth = JSON.parse(raw)
        setEmail(parsed.email)
        setRole(parsed.role)
      } catch {}
    }
  }, [])

  const login: AuthContextType['login'] = async (inputEmail, password) => {
    const match = DEMO_USERS.find(u => u.email === inputEmail.trim().toLowerCase() && u.password === password)
    if (!match) return { success: false, message: 'E-posta veya şifre hatalı' }
    const token = btoa(`${match.email}:${Date.now()}`)
    const data: StoredAuth = { token, role: match.role, email: match.email }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    setEmail(match.email)
    setRole(match.role)
    return { success: true, role: match.role }
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setEmail(null)
    setRole(null)
  }

  const value = useMemo(() => ({
    isAuthenticated: !!role,
    role,
    email,
    login,
    logout,
  }), [email, role])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider')
  return ctx
}

export type { Role }