import { useMemo, useState } from 'react'

type Log = { id: number; user: string; action: string; level: 'info'|'warn'|'error'; time: string }

const SEED: Log[] = [
  { id: 1, user: 'admin@demo.com', action: 'Giriş yaptı', level: 'info', time: '2025-08-01 09:00' },
  { id: 2, user: 'admin@demo.com', action: 'Ayar değişikliği', level: 'warn', time: '2025-08-01 09:15' },
  { id: 3, user: 'system', action: 'Zamanlayıcı çalıştı', level: 'info', time: '2025-08-01 09:30' },
  { id: 4, user: 'admin@demo.com', action: 'Hata raporu', level: 'error', time: '2025-08-01 10:05' },
]

export default function Logs() {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState<'all'|'info'|'warn'|'error'>('all')

  const data = useMemo(() => SEED.filter(l =>
    (level === 'all' || l.level === level) &&
    (l.user.includes(query) || l.action.toLowerCase().includes(query.toLowerCase()))
  ), [query, level])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">İşlem Kayıtları</h1>

      <div className="card p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input className="input" placeholder="Ara (kullanıcı/işlem)" value={query} onChange={e=>setQuery(e.target.value)} />
        <select className="input" value={level} onChange={e=>setLevel(e.target.value as any)}>
          <option value="all">Tümü</option>
          <option value="info">Bilgi</option>
          <option value="warn">Uyarı</option>
          <option value="error">Hata</option>
        </select>
        <button className="btn">PDF İndir</button>
      </div>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">#</th>
              <th className="p-2">Zaman</th>
              <th className="p-2">Kullanıcı</th>
              <th className="p-2">Seviye</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {data.map(l => (
              <tr key={l.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{l.id}</td>
                <td className="p-2 whitespace-nowrap">{l.time}</td>
                <td className="p-2">{l.user}</td>
                <td className="p-2">{l.level}</td>
                <td className="p-2">{l.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}