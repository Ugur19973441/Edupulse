export default function Announcements() {
  const items = [
    { id: 1, title: 'Veli Toplantısı', body: 'Cuma günü 17:00' },
    { id: 2, title: 'Karne Dağıtımı', body: 'Önümüzdeki hafta' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Duyurular</h1>
      <ul className="card p-4 space-y-3">
        {items.map(i => (
          <li key={i.id} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
            <div className="font-semibold">{i.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{i.body}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}