export default function Schedule() {
  const items = [
    { day: 'Pazartesi', time: '09:00 - 09:45', course: 'Matematik' },
    { day: 'Salı', time: '10:00 - 10:45', course: 'Fen Bilimleri' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Ders Programı (Öğretmen)</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Gün</th>
              <th className="p-2">Saat</th>
              <th className="p-2">Ders</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.day}</td>
                <td className="p-2">{i.time}</td>
                <td className="p-2">{i.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}