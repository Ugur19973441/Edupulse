export default function Reports() {
  const data = [
    { student: 'Ali Yılmaz', avg: 82 },
    { student: 'Ayşe Demir', avg: 90 },
  ]
  const exportPdf = () => alert('PDF indirildi (mock)')
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Raporlar</h1>
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Not Ortalamaları</h2>
          <button className="btn" onClick={exportPdf}>PDF İndir</button>
        </div>
        <ul className="list-disc pl-6">
          {data.map(r => <li key={r.student}>{r.student}: {r.avg}</li>)}
        </ul>
      </div>
    </div>
  )
}