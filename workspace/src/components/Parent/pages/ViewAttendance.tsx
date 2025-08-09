export default function ViewAttendance() {
  const rows = [
    { date: '2025-08-01', status: 'Var' },
    { date: '2025-08-02', status: 'Yok' },
    { date: '2025-08-03', status: 'Var' },
  ]
  const absent = rows.filter(r => r.status === 'Yok').length
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Özel Sayfa: Devamsızlık</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Tarih</th>
              <th className="p-2">Durum</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2 whitespace-nowrap">{r.date}</td>
                <td className="p-2">{r.status}</td>
                <td className="p-2">
                  <button className="text-sm px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">İtiraz Et</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-4">Toplam devamsızlık: <strong>{absent}</strong> gün</div>
    </div>
  )
}