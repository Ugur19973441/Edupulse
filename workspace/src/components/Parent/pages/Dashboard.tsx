export default function Dashboard() {
  const avg = 86
  const announcements = [
    { id: 1, title: 'Veli Toplantısı', body: 'Cuma günü 17:00' },
    { id: 2, title: 'Karne Dağıtımı', body: 'Önümüzdeki hafta' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Veli Paneli</h1>
      <div className="card p-4">
        <div className="text-sm text-gray-500">Not Ortalaması</div>
        <div className="text-3xl font-semibold">{avg}</div>
      </div>
      <div className="card p-4">
        <h2 className="font-semibold mb-2">Duyurular</h2>
        <ul className="list-disc pl-6">
          {announcements.map(a => <li key={a.id}>{a.title}: {a.body}</li>)}
        </ul>
      </div>
    </div>
  )
}