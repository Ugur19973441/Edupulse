export default function Evaluation() {
  const rows = [
    { student: 'Ali Yılmaz', status: 'Pozitif', note: 'Derste aktif' },
    { student: 'Ayşe Demir', status: 'Nötr', note: 'İstikrarlı' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Genel Değerlendirme</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Öğrenci</th>
              <th className="p-2">Durum</th>
              <th className="p-2">Not</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{r.student}</td>
                <td className="p-2">{r.status}</td>
                <td className="p-2">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}