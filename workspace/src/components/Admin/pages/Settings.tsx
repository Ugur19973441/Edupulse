import { useTheme } from '../../../hooks/useTheme'
import { useState } from 'react'

export default function Settings() {
  const { theme, setTheme } = useTheme()
  const [welcome, setWelcome] = useState('EduPulse’a hoş geldiniz!')

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Ayarlar kaydedildi (mock)')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Uygulama Ayarları</h1>

      <div className="card p-4">
        <h2 className="font-semibold mb-3">Tema</h2>
        <div className="flex items-center gap-2">
          <select className="input w-auto" value={theme} onChange={(e)=>setTheme(e.target.value as any)}>
            <option value="system">Sistem</option>
            <option value="light">Açık</option>
            <option value="dark">Koyu</option>
          </select>
          <span className="text-sm text-gray-500">Otomatik sistem teması algılanır</span>
        </div>
      </div>

      <form onSubmit={save} className="card p-4 space-y-3">
        <h2 className="font-semibold">Sistem Mesajları</h2>
        <div>
          <label className="label">Karşılama Mesajı</label>
          <input className="input" value={welcome} onChange={(e)=>setWelcome(e.target.value)} />
        </div>
        <button className="btn w-fit">Kaydet</button>
      </form>
    </div>
  )
}