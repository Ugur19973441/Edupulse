import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../hooks/useTheme'
import { toast } from 'react-toastify'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { toggle, isDark } = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await login(email, password)
    setLoading(false)
    if (!res.success) {
      toast.error(res.message || 'Giriş başarısız')
      return
    }
    toast.success('Giriş başarılı')
    if (res.role === 'admin') navigate('/admin')
    if (res.role === 'teacher') navigate('/teacher')
    if (res.role === 'parent') navigate('/parent')
  }

  const fillDemo = (role: 'admin'|'teacher'|'parent') => {
    if (role === 'admin') { setEmail('admin@demo.com'); setPassword('123456') }
    if (role === 'teacher') { setEmail('ogretmen@demo.com'); setPassword('123456') }
    if (role === 'parent') { setEmail('veli@demo.com'); setPassword('123456') }
  }

  return (
    <div className="min-h-full flex items-center justify-center p-6">
      <div className="w-full max-w-md card p-6">
        <div className="flex items-center justify-center mb-4">
          <img src="/edupulse%20logo-1.png" alt="EduPulse" className="h-12 w-auto" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display='none'}} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-1">EduPulse</h1>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">Giriş yapın ve panelinize yönlendirilelim</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="label">E-posta</label>
            <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="ornek@domain.com" required />
          </div>
          <div>
            <label className="label">Şifre</label>
            <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••" required />
          </div>
          <button className="btn w-full" disabled={loading} type="submit">{loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}</button>
        </form>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <button onClick={()=>fillDemo('admin')} className="btn">Admin</button>
          <button onClick={()=>fillDemo('teacher')} className="btn">Öğretmen</button>
          <button onClick={()=>fillDemo('parent')} className="btn">Veli</button>
        </div>

        <div className="mt-6 text-center">
          <button className="text-sm text-primary-600 hover:underline" onClick={toggle}>
            {isDark ? 'Açık tema' : 'Koyu tema'}
          </button>
        </div>
      </div>
    </div>
  )
}