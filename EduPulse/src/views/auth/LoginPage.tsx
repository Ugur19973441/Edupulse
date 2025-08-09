import { FormEvent, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/auth/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const user = await login(email, password);
      const redirectTo = location.state?.from?.pathname || `/${user.role.toLowerCase()}`;
      navigate(redirectTo, { replace: true });
    } catch (err: any) {
      setError(err.message || 'Giriş başarısız');
    } finally {
      setLoading(false);
    }
  }

  async function quick(role: 'Admin' | 'Teacher' | 'Parent') {
    const creds = {
      Admin: { email: 'admin@demo.com', password: '123456' },
      Teacher: { email: 'ogretmen@demo.com', password: '123456' },
      Parent: { email: 'veli@demo.com', password: '123456' },
    }[role];
    setEmail(creds.email);
    setPassword(creds.password);
    try {
      const user = await login(creds.email, creds.password);
      navigate(`/${user.role.toLowerCase()}`, { replace: true });
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-white dark:bg-slate-900">
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-brand to-brand-light text-white p-10">
        <h1 className="text-4xl font-bold">EduPulse</h1>
        <p className="mt-4 text-lg max-w-md text-white/90">Tam özellikli, rol bazlı modern eğitim yönetim sistemi.</p>
      </div>
      <div className="flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Giriş Yap</h1>
          {error && <div className="p-2 text-sm text-red-700 bg-red-100 rounded">{error}</div>}
          <div>
            <label className="block text-sm mb-1">E-posta</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand" />
          </div>
          <div>
            <label className="block text-sm mb-1">Şifre</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand" />
          </div>
          <button disabled={loading} type="submit" className="w-full bg-brand hover:bg-brand-dark text-white py-2 rounded transition disabled:opacity-60">
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
          <div className="pt-2 grid grid-cols-3 gap-2 text-xs">
            <button type="button" onClick={() => quick('Admin')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded">Admin</button>
            <button type="button" onClick={() => quick('Teacher')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded">Öğretmen</button>
            <button type="button" onClick={() => quick('Parent')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded">Veli</button>
          </div>
        </form>
      </div>
    </div>
  );
}