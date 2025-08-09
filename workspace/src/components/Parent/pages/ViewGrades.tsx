export default function ViewGrades() {
  const rows = [
    { exam: 'Matematik 1', score: 78 },
    { exam: 'Matematik 2', score: 85 },
    { exam: 'Matematik 3', score: 91 },
  ]
  const trend = rows.map((r, i) => (i === 0 ? 0 : r.score - rows[i-1].score))
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Özel Sayfa: Notlar</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Sınav</th>
              <th className="p-2">Puan</th>
              <th className="p-2">Trend</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{r.exam}</td>
                <td className="p-2">{r.score}</td>
                <td className="p-2">{idx === 0 ? '-' : (trend[idx] > 0 ? '+' : '')}{idx === 0 ? '' : trend[idx]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}