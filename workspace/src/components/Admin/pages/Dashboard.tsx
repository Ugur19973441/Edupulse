import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const [stats] = useState([
    { label: 'Toplam Öğretmen', value: 12 },
    { label: 'Toplam Veli', value: 84 },
    { label: 'Toplam Öğrenci', value: 156 },
    { label: 'Aktif Duyuru', value: 5 },
  ])
  const [logs, setLogs] = useState<Array<{ time: string; user: string; action: string }>>([])

  useEffect(() => {
    setLogs([
      { time: '2025-08-01 09:15', user: 'admin@demo.com', action: 'Ayarlar güncellendi' },
      { time: '2025-08-01 09:30', user: 'admin@demo.com', action: 'Yeni öğretmen eklendi' },
      { time: '2025-08-01 10:05', user: 'admin@demo.com', action: 'Duyuru yayınlandı' },
    ])
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Yönetici Paneli</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-4">
            <div className="text-sm text-gray-500">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Son İşlemler</h2>
          <button className="btn">CSV Dışa Aktar</button>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-2">Zaman</th>
                <th className="p-2">Kullanıcı</th>
                <th className="p-2">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-2 whitespace-nowrap">{l.time}</td>
                  <td className="p-2 whitespace-nowrap">{l.user}</td>
                  <td className="p-2">{l.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}