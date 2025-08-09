export default function Reports() {
  const exportPdf = () => alert('PDF indirildi (mock)')
  const rows = [
    { label: 'Ders Katılımı', value: 'Yüksek' },
    { label: 'Ödev Zamanında Teslim', value: '%92' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Raporlar</h1>
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Özet</h2>
          <button className="btn" onClick={exportPdf}>PDF İndir</button>
        </div>
        <ul className="list-disc pl-6">
          {rows.map(r => <li key={r.label}>{r.label}: {r.value}</li>)}
        </ul>
      </div>
    </div>
  )
}