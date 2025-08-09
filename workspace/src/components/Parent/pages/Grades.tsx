export default function Grades() {
  const rows = [
    { exam: 'Matematik 1', score: 78 },
    { exam: 'Türkçe 1', score: 92 },
  ]
  const avg = Math.round(rows.reduce((a,b)=>a+b.score,0)/rows.length)
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Notlarım</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Sınav</th>
              <th className="p-2">Puan</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-top border-gray-200 dark:border-gray-700">
                <td className="p-2">{r.exam}</td>
                <td className="p-2">{r.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-4">
        Ortalama: <strong>{avg}</strong>
      </div>
    </div>
  )
}