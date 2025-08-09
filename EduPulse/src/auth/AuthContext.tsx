import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type UserRole = 'Admin' | 'Teacher' | 'Parent';
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => void;
}

const DEMO_USERS: Array<{ email: string; password: string; role: UserRole; name: string; id: string }> = [
  { email: 'admin@demo.com', password: '123456', role: 'Admin', name: 'Admin', id: '1' },
  { email: 'ogretmen@demo.com', password: '123456', role: 'Teacher', name: 'Öğretmen', id: '2' },
  { email: 'veli@demo.com', password: '123456', role: 'Parent', name: 'Veli', id: '3' },
];

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('edupulse_auth');
    if (raw) {
      setUser(JSON.parse(raw));
    }
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem('edupulse_auth', JSON.stringify(user));
    else localStorage.removeItem('edupulse_auth');
  }, [user]);

  const login = async (email: string, password: string) => {
    const found = DEMO_USERS.find((u) => u.email === email && u.password === password);
    if (!found) {
      return Promise.reject(new Error('Geçersiz e-posta veya şifre'));
    }
    const authUser: AuthUser = { id: found.id, name: found.name, email: found.email, role: found.role };
    setUser(authUser);
    return authUser;
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}