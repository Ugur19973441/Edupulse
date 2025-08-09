export default function Attendance() {
  const rows = [
    { date: '2025-08-01', status: 'Var' },
    { date: '2025-08-02', status: 'Yok' },
  ]
  const absent = rows.filter(r => r.status === 'Yok').length
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Devamsızlık Bilgisi</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Tarih</th>
              <th className="p-2">Durum</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2 whitespace-nowrap">{r.date}</td>
                <td className="p-2">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-4">Toplam devamsızlık: <strong>{absent}</strong> gün</div>
    </div>
  )
}